import { initializeApp } from 'firebase-admin';

initializeApp();

export { addTeamMember } from './addTeamMember';
export { createTeam } from './createTeam';
export { saveHistory } from './saveHistory';
export { updateTeamSettings } from './updateTeamSettings';
export { updateUserProfile } from './updateUserProfile';
export { verifyNewUser } from './verifyNewUser';
