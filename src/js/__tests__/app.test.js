/* eslint-disable */
import ErrorRepository from "../app";

const error = new ErrorRepository(404, 'страница не найдена');

test('проверка кода ошибки', () => {
    const expented = 'страница не найдена';
    expect(error.translate(404)).toBe(expented);
});

test('неизвестная ошибка', () => {
    const expented = 'Unknown error';
    expect(error.translate(505)).toBe(expented);
});