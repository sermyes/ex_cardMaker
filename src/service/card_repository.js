import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';

class CardRepository {
  constructor() {
    this.database = getDatabase();
  }

  syncCard(userId, onUpdate) {
    const query = ref(this.database, `${userId}/cards/`);
    onValue(query, snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });

    return () => off(query);
  }

  saveCard(userId, card) {
    set(ref(this.database, `${userId}/cards/${card.id}`), card);
  }

  removeCard(userId, card) {
    remove(ref(this.database, `${userId}/cards/${card.id}`));
  }
}

export default CardRepository;
