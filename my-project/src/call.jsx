import React, { useState, useEffect } from 'react';
import { callingConfig, clientConfig } from './config/appEnvConfig.js';
import { ConnectionStates, CoreSDK } from './coreLib/cpaasCoreSDK.js';
import { initializeCallingSdk } from './callingLibs/callingLib.js';

export function CPaaSApp() {
  const [connectionStatus, setConnectionStatus] = useState('');
  const [networkConnection, setNetworkConnection] = useState('');
  const [websocketStatus, setWebsocketStatus] = useState('');
  const [infoText, setInfoText] = useState('');
  
  let coreSDK = CoreSDK.getInstance();
  let regMgr = coreSDK.getRegistrationManager();
  let haveInitializedOtherSDKs = false;

  useEffect(() => {
    const startApp = async () => {
      setConnectionStatus('App Startup');
      
      if (!validateConfigurationData(clientConfig)) {
        setConnectionStatus('Bad Config Data');
        return ConnectionStates.CONNECT_FAILED;
      }

      regMgr.initialize(clientConfig);
      regMgr.addRegManagerListener(regManagerEventListeners);

      const appState = await regMgr.appStart().catch(() => {
        setConnectionStatus('Startup Failure');
        return ConnectionStates.CONNECT_FAILED;
      });

      setNetworkConnection(regMgr.isOnline() ? 'onLine' : 'offLine');
      setWebsocketStatus(regMgr.isWebSocketConnected() ? 'open' : 'closed');
      setConnectionStatus(appState);

      if (appState === ConnectionStates.CONNECTED) {
        await getAllAccountLines().catch(() => undefined);
      }

      return appState;
    }

    startApp();
  }, []);

  function validateConfigurationData(clientConfigData) {
    return (
        clientConfigData &&
        clientConfigData.networkEnvironment &&
        clientConfigData.networkEnvironment.cpaasURLBase &&
        clientConfigData.networkEnvironment.euiURLBase &&
        clientConfigData.networkEnvironment.networkPingServer &&
        clientConfigData.clientId &&
        clientConfigData.clientPrivateKey &&
        clientConfigData.clientSecret &&
        clientConfigData.clientURLBase
      )
  }

  const regManagerEventListeners = {
    onConnectionError: (event) => {
        // eslint-disable-next-line no-console
        console.warn('Connection Error', event)
      },
      onConnectionState: (event) => {
        setConnectionStatusText(event.newConnectionState)
        if (event.newConnectionState === ConnectionStates.CONNECTED && !haveInitializedOtherSDKs) {
          haveInitializedOtherSDKs = true
          initializeCallingSdk(callingConfig, coreSDK).catch((err) => {
            // eslint-disable-next-line no-console
            console.warn('Error initializing CallingSDK', err)
          })
        }
      },
      onNetworkConnection: (event) => {
        setNetworkConnectionText(event.networkState)
      },
      onWebsocketConnection: (event) => {
        setWebsocketStatusText(event.websocketState)
      },
  };

  const userSignIn = () => {
    if (regMgr.getConnectionState() === ConnectionStates.NEW) {
      regMgr.cpaasSignIn();
    }
  };

  const userSignOut = async () => {
    if (regMgr.getConnectionState() !== ConnectionStates.NEW) {
      await regMgr.disconnect();
    }
  };

  const getAllAccountLines = async () => {
    let accountLinesStr = '';
    let regMgr = CoreSDK.getInstance().getRegistrationManager(); // Assuming you get your regMgr this way

    if ([ConnectionStates.CONNECTED].includes(regMgr.getConnectionState())) {
      const accountLines = regMgr.getAllLines();

      for (const line of accountLines) {
        accountLinesStr += `msisdn: ${line.msisdn}, registered: ${line.regStatus ? 'true' : 'false'}\r\n`;
      }
    }
    setInfoText(accountLinesStr);
  };

  return (
    <div>
      <div>
        <span>Connection Status:</span>
        <input value={connectionStatus} className={connectionStatus === ConnectionStates.CONNECTED ? 'ok' : ''} readOnly />
      </div>
      <div>
        <span>Network Connection:</span>
        <input value={networkConnection} className={networkConnection === 'onLine' ? 'ok' : 'error'} readOnly />
      </div>
      <div>
        <span>WebSocket Status:</span>
        <input value={websocketStatus} className={websocketStatus === 'open' ? 'ok' : 'error'} readOnly />
      </div>
      <div>
        <textarea value={infoText} readOnly />
      </div>
      <button onClick={userSignIn}>Sign In</button>
      <button onClick={userSignOut}>Sign Out</button>
    </div>
  );
}
