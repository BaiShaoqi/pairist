import { db, fieldValue } from '../firebase';
import { ListData } from '../types';

const teamsRef = db.collection('teams');

export async function createList(teamId: string, list: Partial<ListData>) {
  await teamsRef
    .doc(teamId)
    .collection('lists')
    .add({
      created: fieldValue.serverTimestamp(),
      title: list.title || 'Untitled',
      order: list.order,
    });
}

export async function updateList(teamId: string, list: Partial<ListData>) {
  await teamsRef
    .doc(teamId)
    .collection('lists')
    .doc(list.listId)
    .update({
      title: list.title || 'Untitled',
    });
}

export async function deleteList(teamId: string, listId: string) {
  await teamsRef.doc(teamId).collection('lists').doc(listId).delete();
}

export async function reorderLists(teamId: string, listsWithNewOrders: ListData[]) {
  const batch = db.batch();

  for (const list of listsWithNewOrders) {
    batch.set(
      teamsRef.doc(teamId).collection('lists').doc(list.listId),
      { order: list.order },
      { merge: true }
    );
  }

  await batch.commit();
}
