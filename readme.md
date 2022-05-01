Actualmente se necesita calcular cierta información de los explorers de LaunchX, de momento se ha desarrollado por una consultoría externa muy mala un script en JS para realizar esto. Sin embargo después de una evaluación interna se ha decidido refactorizar totalmente el proyecto, y esta es tu primer set de tareas a realizar.

Este proyecto lee un archivo `explorers.json` que contiene una lista de explorers con información que necesitamos procesar. Con este script se logró:

- Obtener la lista de explorers que solo están en node.
- Obtener la cantidad de explorers que están en node.
- Obtener la lista de usuarios de github de los explorers que están en node.
- Se necesitó crear una validación llamada FizzBuzz, si el explorer tiene un score que sea divisible entre 3 (revisa cómo hacer esto), deberá tener un campo `trick` que diga `FIZZ`, cualquier otro caso el valor de este nuevo campo deberá ser el score mismo. Esta validación nos sirve porque necesitamos aplicarla a la lista de todos los explorers y saber cuáles son FIZZ.
- Después necesitamos una validación muy similar pero para cuando el score sea divisible entre 5, entonces el valor del nuevo campo `trick` será BUZZ, cualquier otro caso el valor será el score.
- Pero después volvimos a necesitar otro caso para cuando el valor del score fuera divisible entre 3 y también entre 5, entonces el valor del campo `trick` debe ser FIZZBUZZ, de lo contrario tendrá el valor del score.

Actualmente las últimas 3 validaciones se corren independientemente y se juntan en un excel. Se necesita una misma validación que apliqué las tres reglas a toda la lista:

- Si el campo score del explorer es divisible entre 3, entonces se agrega un campo nuevo llamado `trick` cuyo valor será `FIZZ`.
- Si el campo score del explorer es divisible entre 5, entonces se agrega un campo nuevo llamado `trick` cuyo valor será `BUZZ`.
- Si el campo score del explorer es divisible entre 3 y 5, entonces se agrega un campo nuevo llamado `trick` cuyo valor será `FIZZBUZZ`.
- Si el campo score no es divisible por ninguna de las reglas anteriores, se agrega un campo nuevo llamado `trick` cuyo valor será el del score.

Requerimientos:

1. Refactorizar el script legado y rehacerlo con mucho cuidado ya que es información muy sensible.
2. Crea un API para usar la funcionalidad anterior:

| Endpoint                                           | Request                                        | Response                                                                               |
| -------------------------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------- |
| `localhost:3000/v1/explorers/:mission`           | `localhost:3000/v1/explorers/node`           | Deberás obtener la lista de explorers en la misión que enviaste (node o java)        |
| `localhost:3000/v1/explorers/amount/:mission`    | `localhost:3000/v1/explorers/amount/node`    | Deberás obtener la cantidad de explorers según la misión que enviaste (node o java) |
| `localhost:3000/v1/explorers/usernames/:mission` | `localhost:3000/v1/explorers/usernames/node` | Deberás obtener la lista de usernames en la misión que enviaste (node o java)        |

3. Nuevo requerimiento: Crea un endpoint para recibir un número y aplicar la validación del fizzbuzz. (ESTO SE DEBE CREAR DESDE CERO)
