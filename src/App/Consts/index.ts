export const ConfigControlItems = {
	TakeQuiz: "Take Quiz",
	BuySupplements: "Buy Supplements",
	UploadFiles: "Upload Files",
	ConnectApp: "Connect App / Device",
};

export const UploadFileTypes = {
	Microbiome: {
		title: "Microbiome",
		fileTypes: [".fastq"],
		fileSize: 25,
	},
	Blood: {
		title: "Blood",
		fileTypes: [".pdf"],
		extra: "PDF",
		fileSize: 25,
	},
	Genetic: {
		title: "Genetic",
		fileTypes: [".fastq", ".vcf"],
		fileSize: 25,
	},
};
