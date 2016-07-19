/**
 * Created by skolbe on 14.07.16.
 */
describe('tutorialApp' ,function () {
    describe('sortTodoListWithUS', function () {
        let TodoList = [{author:"Ruben"},{author:"Sophie"},{author:"Tomtom"},{author:"Kaiser"}];
        it('should make sort the list by author', function () {
            expect(sortTodoListWithUS(testList,'author')[0].author).toEqual('Kaiser');
        });
    });
});
