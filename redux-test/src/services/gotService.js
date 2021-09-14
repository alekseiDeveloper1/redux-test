export default class GotService {
  constructor() {
      this._apiBase = 'https://reqres.in/api';
  }

  getResource = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
          `, received ${res.status}`);
      }
      return await res.json();
  }
  
  getAllCharacters = async () => {
      const res = await this.getResource(`/users?page=2`);
      return res.data.map(this._transformCharacter);
  }
  
  getCharacter = async (id) => {
      const character = await this.getResource(`/users/${id}`);
      return this._transformCharacter(character.data);
  }

  isSet(data) {
      if (data) {
          return data
      } else {
          return 'no data :('
      }
  }

  _transformCharacter = (char) => {
      return {
          id: this.isSet(char.id),
          name: this.isSet(char.first_name),
          img: this.isSet(char.avatar),
          surname: this.isSet(char.last_name),
          email: this.isSet(char.email),
      };
  }
}