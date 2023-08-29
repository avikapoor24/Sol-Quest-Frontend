
export interface QuestInfo {
	data: any;
}

export interface QuestProgress {
	questProgressID: any; // what are the types
	task: any; // what are the types
}

export enum QuestStatus {
	FINISHED = "FINISHED",
	ONGOING = "ONGOING",
	DRAFTED = "DRAFTEDD",
}

export enum TaskStatus {
	PENDING = "pending",
	COMPLETED = "completed",
}
export interface ReferalObject {
	questId: string;
	referrelUserObjectId: string;
	taskId: string;
}

export namespace GetAllQuests {
	export type Response = any;
}

export namespace GetQuest {
	export type Response = any;
	export type Params = string;
}

export namespace UpdateQuestProgress {
	export type Params = any;
	export type Response = QuestInfo;
}

export namespace GetUserData {
	export type Params = string;
	export type Response = any; // referralCode type?
}

export namespace GetQuesters {
	export type Response = any;
	export type Params = { page: number; length: number };
}

export namespace UpdateTaskStatus {
	export type Params = { questId: string; userId: string; taskStatus: TaskStatus };
	export type Response = any; // referralCode type?
}

export namespace GetReferralCode {
	export type Params = { walletAddress: string };
	export type Response = string; // referralCode type?
}
export namespace getTaskResponse {
	export type Response = boolean;
}

export namespace UpdateQuestStatus {
	export type Params = { questID: string; questStatus: QuestStatus };
}

export namespace UpdateTaskInQuestProgress {
	export type Params = any;
	export type Response = any;
}

export namespace UserQuestProgress {
	export type Params = { userID: any; questID: string };
	export type Response = any;
}

export namespace TwitterFollow {
	export type Params = { walletId: string; twitterId: string };
	export type Response = any;
}

export namespace Tweet {
	export type Params = { walletId: string; tweetId: string };
	export type Response = any;
}

export interface AllQuestCards {
	quests: any;
	noOfColumns: number;
}

export interface CarouselCard {
	id: string;
	quest_title: string;
	quest_discription: string;
	startimeStamp: any;
	quest_status: string;
}
export interface EligibilityButton {
	text: string;
	allTasks: [];
	quest_id: string;
}
export interface RecommendedQuest {
	quests: any;
}

export interface Quest {
	_id: string;
	quest_title: string;
	quest_discription: string;
	startimeStamp: any;
}
