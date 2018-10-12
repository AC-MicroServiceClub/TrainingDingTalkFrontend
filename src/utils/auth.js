
class Auth {
	isAdmin(user) {
		return 999 == user.role
	}

	isTeacher(user) {
		return 1 == user.role
	}

	isStudent(user) {
		return 0 == user.role
	}
}

export default new Auth;