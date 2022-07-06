import { check, PERMISSIONS, RESULTS, request } from "react-native-permissions";
import { Platform } from "react-native";

const PLATFORM_MICROPHONE_PERMISSIONS = {
    ios: PERMISSIONS.IOS.MICROPHONE,
    android: PERMISSIONS.ANDROID.RECORD_AUDIO
}

const REQUEST_PERMISSION_TYPE = {
    microphone: PLATFORM_MICROPHONE_PERMISSIONS
}

const PERMISSION_TYPE = {
    microphone: 'microphone'
}

class AppPermission {
    checkPermission = async (type): Promise<Boolean> => {
        console.log("type: ", type)
        const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS]
        console.log("permissions: ", permissions)
        if(!permissions) {
            return true
        }
        try {
            const result = await check(permissions)
            console.log("result: ", result)
            if (result === RESULTS.GRANTED) return true
            return this.requestPermission(permissions)
        } catch (error) {
            return false
        }
    }

    requestPermission = async (permissions): Promise<Boolean> => {
        console.log("REQUEST permissions: ", permissions)
        try {
            const result = await request(permissions) 
            console.log("REQUEST result: ", result)
            return result === RESULTS.GRANTED
        } catch (error) {
            console.log("REQUEST ERROR: ", error)
            return false
        }
    }
}

const Permission = new AppPermission()

export { Permission, PERMISSION_TYPE }