import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [message, setMessage] = useState('Jam is selected');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {message}
        {message !== 'No goods selected' && (
          <button
            onClick={() => {
              setMessage('No goods selected');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                `${good} is selected` === message &&
                'has-background-success-light'
              }
            >
              <td>
                <button
                  onClick={() => {
                    // eslint-disable-next-line no-unused-expressions
                    message === `${good} is selected`
                      ? setMessage('No goods selected')
                      : setMessage(`${good} is selected`);
                  }}
                  data-cy={
                    `${good} is selected` === message
                      ? 'RemoveButton'
                      : 'AddButton'
                  }
                  type="button"
                  className={
                    `${good} is selected` === message
                      ? 'button is-info'
                      : 'button'
                  }
                >
                  {`${good} is selected` === message ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}

          {/* <tr data-cy="Good" className="has-background-success-light">
            <td>
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
              >
                -
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Jam
            </td>
          </tr>

          <tr data-cy="Good">
            <td>
              <button data-cy="AddButton" type="button" className="button">
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Garlic
            </td>
          </tr> */}
        </tbody>
      </table>

      {/* <h1 className="title is-flex is-align-items-center">No goods selected</h1>

    <h1 className="title is-flex is-align-items-center">
      Jam is selected
      <button data-cy="ClearButton" type="button" className="delete ml-3" />
    </h1>

    <table className="table">
      <tbody>
        <tr data-cy="Good">
          <td>
            <button data-cy="AddButton" type="button" className="button">
              +
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Dumplings
          </td>
        </tr>

        <tr data-cy="Good" className="has-background-success-light">
          <td>
            <button
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
            >
              -
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Jam
          </td>
        </tr>

        <tr data-cy="Good">
          <td>
            <button data-cy="AddButton" type="button" className="button">
              +
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Garlic
          </td>
        </tr>
      </tbody>
    </table> */}
    </main>
  );
};
