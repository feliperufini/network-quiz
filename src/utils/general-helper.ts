export function removeSpecialCharacters(text: string) {
	return text.replace(/[^a-zA-Z0-9]/g, '')
}

export function removeSpecialCharactersAndLetters(text: string) {
	return text.replace(/[^0-9]/g, '')
}

export function removeTextAccents(text: string) {
	if (!text) {
		return ''
	}

	const accentsMap = [
		{ base: 'a', letters: /[\xE0-\xE6\u00E0-\u00E6\u0101-\u0105]/g },
		{ base: 'A', letters: /[\xC0-\xC6\u00C0-\u00C6\u0100-\u0104]/g },
		{ base: 'e', letters: /[\xE8-\xEB\u00E8-\u00EB\u0113-\u0117]/g },
		{ base: 'E', letters: /[\xC8-\xCB\u00C8-\u00CB\u0112-\u0116]/g },
		{ base: 'i', letters: /[\xEC-\xEF\u00EC-\u00EF\u0129-\u012D]/g },
		{ base: 'I', letters: /[\xCC-\xCF\u00CC-\u00CF\u0128-\u012C]/g },
		{ base: 'o', letters: /[\xF2-\xF6\u00F2-\u00F6\u014D-\u0151]/g },
		{ base: 'O', letters: /[\xD2-\xD6\u00D2-\u00D6\u014C-\u0150]/g },
		{ base: 'u', letters: /[\xF9-\xFC\u00F9-\u00FC\u016B-\u0173]/g },
		{ base: 'U', letters: /[\xD9-\xDC\u00D9-\u00DC\u016A-\u0172]/g },
		{ base: 'c', letters: /[\xE7\u00E7\u0107-\u010D]/g },
		{ base: 'C', letters: /[\xC7\u00C7\u0106-\u010C]/g },
		{ base: 'n', letters: /[\xF1\u00F1\u0144-\u0148]/g },
		{ base: 'N', letters: /[\xD1\u00D1\u0143-\u0147]/g },
	]

	let newText = text
	accentsMap.forEach(({ base, letters }) => {
		newText = newText.replace(letters, base)
	})

	return newText
}

export function formatToCpfCnpj(value: string) {
	if (!value) {
		return ''
	}

	const cpfCnpj = value.replace(/\D/g, '')

	if (cpfCnpj.length === 11) {
		return cpfCnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
	} else if (cpfCnpj.length === 14) {
		return cpfCnpj.replace(
			/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
			'$1.$2.$3/$4-$5',
		)
	} else {
		return value
	}
}

export function formatToTelephone(value: string) {
	if (!value) {
		return null
	}
	const telephone = value.replace(/\D/g, '')

	if (telephone.length === 10) {
		return telephone.replace(/(\d{2})(\d{4})(\d{4})/g, '($1) $2-$3')
	} else if (telephone.length === 11) {
		return telephone.replace(/(\d{2})(\d{5})(\d{4})/g, '($1) $2-$3')
	} else {
		return telephone
	}
}

export function formatToZipCode(value: string) {
	if (!value) {
		return ''
	}
	const zipCode = value.replace(/\D/g, '')

	if (zipCode.length !== 8) {
		return ''
	}

	return zipCode.replace(/(\d{5})(\d{3})/g, '$1-$2')
}

export function formatToMoneyBr(amount: number, symbol = false) {
	if (!amount) {
		return symbol ? 'R$ 0,00' : '0,00'
	}

	let valueInCents = 0
	if (typeof amount === 'string') {
		valueInCents = Number(removeSpecialCharactersAndLetters(amount))
	} else {
		valueInCents = amount * 100
	}

	return (valueInCents / 100).toLocaleString('pt-BR', {
		style: symbol ? 'currency' : undefined,
		currency: 'BRL',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})
}

export function checkPasswordIsValid(password: string): boolean {
	const regex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/
	return regex.test(password)
}

export function addZerosToNumber(number: number | string, zerosLength: number) {
	const zeros = zerosLength - number.toString().length
	return '0'.repeat(zeros > 0 ? zeros : 0) + number
}

export function generateSlug(text: string): string {
	return removeTextAccents(text)
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-+|-+$/g, '')
}

export function generateUnderscoreSlug(text: string): string {
	return removeTextAccents(text)
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-+|-+$/g, '')
}

export function extractTextBetweenParentheses(text: string): string {
	const startIndex = text.indexOf('(')
	const endIndex = text.indexOf(')')

	return text.substring(startIndex + 1, endIndex)
}
