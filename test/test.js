'use strict';

const expect = require('chai').expect;
const dirtree = require('../src/complete-directory-tree');


describe('directoryTree', () => {

    it('should return an Object', () => {
        const tree = dirtree('./test/test_data');
        expect(tree).to.be.an('object');
    });

    it('should have three directories in test directory', () => {
        const tree = dirtree('./test/test_data', ['.txt']);
        expect(tree.children.length).to.equal(3);
    });

    it('should have zero directories in test directory', () => {
        const tree = dirtree('./test/test_data/some_dir_2', ['.txt']);
        expect(tree.children.length).to.equal(0);
    });

    it('should have two txt files in test directory', () => {
        const tree = dirtree('./test/test_data', ['.txt']);
        expect(tree.files.length).to.equal(2);
    });

    it('should have zero txt files in test directory', () => {
        const tree = dirtree('./test/test_data/some_dir_2', ['.txt']);
        expect(tree.files.length).to.equal(0);
    });

    it('should have one file in test directory', () => {
        const tree = dirtree('./test/test_data/some_dir_2');
        expect(tree.files.length).to.equal(1);
    });

    it('should have zero file in test directory', () => {
        const tree = dirtree('./test/test_data/some_dir_3');
        expect(tree.files.length).to.equal(0);
    });

    it('should have two files in the sub directory in test directory', () => {
        const tree = dirtree('./test/test_data/some_dir');
        expect(tree.children[0].files.length).to.equal(2);
    });

    it('file size should be 2307 bytes', () => {
        const tree = dirtree('./test/test_data/some_dir_2');
        expect(tree.files[0].size).to.equal(2307);
    });


    it('should not crash with directories where the user does not have necessary permissions', () => {
        const tree = dirtree('/root/');
        expect(tree).to.equal(null);
    });
});
