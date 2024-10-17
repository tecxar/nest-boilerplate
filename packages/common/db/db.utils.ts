const DATABASE_MODULE = "CD_DATABASE_MODULE";

export function getClientToken(
	key = "",
) {
	return `${DATABASE_MODULE}#${key}`;
}