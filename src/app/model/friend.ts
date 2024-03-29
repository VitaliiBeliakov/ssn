import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;

export interface Friend {
  uid: string;
  name: string;
  birthday?: Timestamp;
  photo?: string;
  myFriend: boolean;
}
