import { registerRootComponent } from 'expo';
import NewRelic from 'newrelic-react-native-agent';
import * as appVersion from './package.json';
import {Platform} from 'react-native';

import App from './App';

let appToken;

if (Platform.OS === 'ios') {
    appToken = '<IOS-APP-TOKEN>';
} else {
    appToken = '<ANDROID-APP-TOKEN>';
}


const agentConfiguration = {

//Android Specific
// Optional:Enable or disable collection of event data.
analyticsEventEnabled: true,

//Android Specific
// Optional:Enable or disable collection of native c/c++ crash.
nativeCrashReportingEnabled: false,

// Optional:Enable or disable crash reporting.
crashReportingEnabled: true,

// Optional:Enable or disable interaction tracing. Trace instrumentation still occurs, but no traces are harvested. This will disable default and custom interactions.
interactionTracingEnabled: false,

// Optional:Enable or disable reporting successful HTTP requests to the MobileRequest event type.
networkRequestEnabled: true,

// Optional:Enable or disable reporting network and HTTP request errors to the MobileRequestError event type.
networkErrorRequestEnabled: true,

// Optional:Enable or disable capture of HTTP response bodies for HTTP error traces, and MobileRequestError events.
httpResponseBodyCaptureEnabled: true,

// Optional:Enable or disable agent logging.
loggingEnabled: true,

// Optional:Specifies the log level. Omit this field for the default log level.
// Options include: ERROR (least verbose), WARNING, INFO, VERBOSE, AUDIT (most verbose).
logLevel: NewRelic.LogLevel.INFO,

// iOS Specific
// Optional:Enable/Disable automatic instrumentation of WebViews
webViewInstrumentation: true,

// Optional:Set a specific collector address for sending data. Omit this field for default address.
//collectorAddress: "",

// Optional:Set a specific crash collector address for sending crashes. Omit this field for default address.
//crashCollectorAddress: "",

// Optional:Enable or disable reporting data using different endpoints for US government clients.
//fedRampEnabled: false

 // Optional: Enable or disable offline data storage when no internet connection is available.
 offlineStorageEnabled:true,

 // iOS Specific
 // Optional: Enable or disable Background Reporting.
 backgroundReportingEnabled:false,

 // iOS Specific
 // Optional: Enable or disable to use our new, more stable, event system for iOS agent.
 newEventSystemEnabled:false,

  // Optional: Enable or disable distributed tracing.
   distributedTracingEnabled: true,
};


NewRelic.startAgent(appToken,agentConfiguration);
NewRelic.setJSAppVersion(appVersion.version);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
