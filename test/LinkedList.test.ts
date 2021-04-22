import { describe, it } from 'mocha';
import { expect } from 'chai';

import LinkedList from '../src/LinkedList';

describe('LinkedList', () => {
    describe('Constructing', () => {
        it('should create an empty linked list', () => {
            const list = new LinkedList();
            expect(list.toString()).to.equal('');
        });
        it('should create a linked list from an array', () => {
            const list = new LinkedList([1, 2, 3, 4, 5]);
            expect(list.toString()).to.equal('1 2 3 4 5');
        });
    });

    describe('Adding Items', () => {
        it('should add a single item to the start', () => {
            const list = new LinkedList();
            list.insertAtHead(10);
            expect(list.toString()).to.equal('10');

            const list1 = new LinkedList([0, 1, 2, 3, 4]);
            list1.insertAtHead(10);
            expect(list1.toString()).to.equal('10 0 1 2 3 4');
        });

        it('should add a single item to the end', () => {
            const list = new LinkedList();
            list.insertAtTail(10);
            expect(list.toString()).to.equal('10');

            const list1 = new LinkedList([1, 2, 3, 4, 5]);
            list1.insertAtTail(6);
            expect(list1.toString()).to.equal('1 2 3 4 5 6');
        });

        it('should add items from an array to either the beginning or the end of the list', () => {
            const list = new LinkedList([10]);
            list.insertAtHead([20, 30, 40]);
            expect(list.toString()).to.equal('40 30 20 10');

            const list1 = new LinkedList([10]);
            list1.insertAtTail([20, 30, 40]);
            expect(list1.toString()).to.equal('10 20 30 40');
        });
    });

    describe('Getting Items', () => {
        it('should return the number of items in list', () => {
            const list = new LinkedList();
            expect(list.length).to.equal(0);

            list.insertAtHead(10);
            expect(list.length).to.equal(1);

            list.insertAtTail(10);
            expect(list.length).to.equal(2);

            const list1 = new LinkedList([1, 2, 3, 4, 5]);
            expect(list1.length).to.equal(5);
        });

        it('should return whether an item is in the list', () => {
            const list = new LinkedList([1, 2, 3, 4, 5, 6]);
            expect(list.contains(1)).to.equal(true);
            expect(list.contains(10)).to.equal(false);
        });
        it('should get the index of an item in the list', () => {
            const list = new LinkedList([1, 2, 3, 4, 5, 6]);
            expect(list.indexOf(1)).to.equal(0);
            expect(list.indexOf(2)).to.equal(1);
            expect(list.indexOf(3)).to.equal(2);
            expect(list.indexOf(10)).to.equal(-1);
        });
        it('should get the value at a certain index in the list', () => {
            const list = new LinkedList([1, 2, 3, 4, 5, 6]);
            expect(list.getAtIndex(0)).to.equal(1);
            expect(list.getAtIndex(1)).to.equal(2);
            expect(list.getAtIndex(2)).to.equal(3);
            expect(list.getAtIndex(3)).to.equal(4);
            expect(list.getAtIndex(10)).to.equal(undefined);
        });
    });

    describe('Changing Items', () => {
        it('should set the value at a given index', () => {
            const list = new LinkedList([1, 2, 3, 4, 5, 6]);
            list.setAtIndex(0, 5);
            expect(list.toString()).to.equal('5 2 3 4 5 6');

            const list1 = new LinkedList();
            list.setAtIndex(0, 10);
            expect(list1.length).to.equal(0);
            expect(list1.toString()).to.equal('');

            const list2 = new LinkedList([1, 2, 3, 4, 5, 6]);
            list2.setAtIndex(10, 11);
            expect(list2.length).to.equal(6);
            expect(list2.toString()).to.equal('1 2 3 4 5 6');
        });
    });

    describe('Removing items', () => {
        it('should remove the first item', () => {
            const list = new LinkedList([1, 2, 3, 4, 5, 6]);
            list.removeAtHead();
            expect(list.toString()).to.equal('2 3 4 5 6');
        });

        it('should remove the last item', () => {
            const list = new LinkedList([1, 2, 3, 4, 5, 6]);
            list.removeAtTail();
            expect(list.toString()).to.equal('1 2 3 4 5');
        });

        it('should remove an item by value', () => {
            const list = new LinkedList([1, 2, 3, 4, 5, 6]);
            list.removeValue(3);
            expect(list.toString()).to.equal('1 2 4 5 6');
            // What if item not in list?

            const list1 = new LinkedList([1, 2, 3, 3, 4]);
            list1.removeValue(3);
            expect(list1.length).to.equal(4);
            expect(list1.toString()).to.equal('1 2 3 4');
            list1.removeValue(2);
            expect(list1.length).to.equal(3);
            expect(list1.toString()).to.equal('1 3 4')
        });

        it('should remove an item by index', () => {
            const list = new LinkedList([1, 2, 3, 4, 5, 6]);
            list.removeAtIndex(2);
            expect(list.toString()).to.equal('1 2 4 5 6');
            // What if index out of bounds?
        });

        it('should clear all items', () => {
            const list = new LinkedList([1, 2, 3, 4, 5]);
            list.clear();
            expect(list.length).to.equal(0);
            expect(list.toString()).to.equal('');

            const list1 = new LinkedList();
            list.clear();
            expect(list1.length).to.equal(0);
            expect(list1.toString()).to.equal('');
        });
    });
});
