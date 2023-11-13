function Unauthorized() {
	return new Error('Unauthorized - Secret key is invalid');
}

export const Errors = {
	Unauthorized
};
