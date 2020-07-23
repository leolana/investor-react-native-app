import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';

export default async (): Promise<void> => {
  const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    return;
  }
  console.log(finalStatus);

  console.log('Notification Token: ', await Notifications.getExpoPushTokenAsync());
};
