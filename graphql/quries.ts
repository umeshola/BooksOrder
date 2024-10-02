import { gql } from "@apollo/client";

export const GET_NOVELS = gql`
	query Novels {
		novels {
			id
			image
			createdAt
			title
			updatedAt
			author {
				id
				name
				novelId
			}
		}
	}
`;

export const ADD_NOVEL = gql`
	mutation AddNovel($image: String, $title: String) {
		addNovel(image: $image, title: $title) {
			author {
				id
				name
				novelId
			}
			createdAt
			id
			image
			title
			updatedAt
		}
	}
`;

export const DELETE_NOVEL = gql`
	mutation deleteNovel($id: ID!) {
		deleteNovel(id: $id) {
			id
			title
			image
		}
	}
`;

export const UPDATE_NOVEL = gql`
	mutation UpdateNovel($id: ID!, $title: String, $image: String) {
		updateNovel(id: $id, title: $title, image: $image) {
			id
			image
			title
		}
	}
`;

export const ADD_AUTHOR = gql`
	mutation Mutation($novelId: ID!, $name: String) {
		addAuthor(novelId: $novelId, name: $name) {
			id
			name
			novelId
		}
	}
`;

export const DELETE_AUTHOR = gql`
	mutation Mutation($id: ID!) {
		deleteAuthor(id: $id) {
			id
			name
			novelId
		}
	}
`;

export const GET_NOVEL = gql`
	query Novel($id: ID!) {
		novel(id: $id) {
			author {
				id
				name
				novelId
			}
			id
			image
			title
		}
	}
`;