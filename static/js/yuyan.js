// 语言
	var LanguageZH, LanguageEN, LanguageUG,lang
	var LanguageZH = {
		"Song": "歌曲", // 左下角第一个菜单名字:点歌 换成 歌曲也许应该更好一些
		"Singers": "歌手",
		"New": "最新",
		"Hot": "热门",
		"Type": "分类",
		"Language": "语言",
		"Search": "搜索",
		"Select": "选择", // 点歌  
		"Selected": "已选",
		"SelectedSongs": "已选歌曲",
		"SingedSongs": "已唱歌曲",
		"Sound": "声音", // 音量
		"Music": "歌曲",
		"Mic": "麦克风",
		"Effect": "效果器",
		"MoodWhistle": "欢呼",
		"MoodApplaudShort": "鼓掌",
		"MoodApplaudLong": "嘲笑",
		"MoodSmile": "笑声",
		"Replay": "重唱",
		"SongMode": "伴唱",
		"NexSong": "切歌",
		"Pause": "暂停",
		"Bluetooth": "蓝牙",
		"Enable": "开启",
		"Disable": "关闭",
		"Control": "控制",
		"Other": "其他",
		"All": "全部",
		"MainlandSinger": "大陆歌手",
		"IslandSinger": "港台歌手",
		"UyghurSinger": "维族歌手",
		"ForeignSinger": "外国歌手",
		"MaleSingerNew": "男歌手",
		"FemaleSingerNew": "女歌手",
		"Group": "组合",
		"Country_China": "中国",
		"China_GT": "中国(港台)",
		"CountryChinaUG": "中国(维语)",
		"CountryKoriya": "日韩",
		"CountryIndia": "印度",
		"CountryUzbik": "乌兹别克",
		"CountryEnglish": "欧美",
		"SongTypePop": "流行",
		"SongTypeDance": "舞曲",
		"SongTypeOld": "怀旧",
		"SongTypeFolk": "民歌",
		"SongTypeChild": "儿童",
		"SongTypeDrama": "戏曲",
		"DJ": "DJ",
		"ChangeLanguage": "修改语言",
		"SendMessage": "发送文字",
		"UploadFile": "上传文件",
		"EnableBluetooth": "开启蓝牙",
		"DisableBluetooth": "关闭蓝牙",
		"SearchDescription": "搜索喜欢的歌曲/歌手",
		"Close": "关闭",
		"Retry": "重试",
		"ExpiredDescription": "当前会话已过期, 请重新扫二维码!",
		"FailedDescription": "操作失败!",
		"SuccessDescription": "操作成功!",
		"Loading": "加载中, 请稍后..."
	};

	var LanguageEN = {
		"Song": "Song",
		"Singers": "Singers",
		"New": "New",
		"Hot": "Hot",
		"Type": "Type",
		"Language": "Language",
		"Search": "Search",
		"Select": "Select",
		"Selected": "Selected",
		"SelectedSongs": "Selected",
		"SingedSongs": "Singed",
		"Sound": "Sound",
		"Music": "Music",
		"Mic": "Mic",
		"Effect": "Effect",
		"MoodWhistle": "Cheer",
		"MoodApplaudShort": "Clap",
		"MoodApplaudLong": "Mock",
		"MoodSmile": "Laugh",
		"Replay": "Replay",
		"SongMode": "Instrument",
		"NexSong": "Next",
		"Pause": "Pause",
		"Bluetooth": "Bluetooth",
		"Enable": "Enable",
		"Disable": "Disable",
		"Control": "Control",
		"Other": "Other",
		"All": "All",
		"MainlandSinger": "Mainland Singer",
		"IslandSinger": "Island Singer",
		"UyghurSinger": "Uyghur Singer",
		"ForeignSinger": "Foreign Singer",
		"MaleSingerNew": "Male",
		"FemaleSingerNew": "Female",
		"Group": "Group",
		"Country_China": "China",
		"China_GT": "China(Islands)",
		"CountryChinaUG": "China(Uyghur)",
		"CountryKoriya": "Korea",
		"CountryIndia": "India",
		"CountryUzbik": "Uzbekistan",
		"CountryEnglish": "Western",
		"SongTypePop": "Pop",
		"SongTypeDance": "Dance",
		"SongTypeOld": "Nostalgic",
		"SongTypeFolk": "Folk",
		"SongTypeChild": "Children's Songs",
		"SongTypeDrama": "12 Mukam",
		"DJ": "DJ",
		"ChangeLanguage": "Change Language",
		"SendMessage": "Send Message",
		"UploadFile": "Upload File",
		"EnableBluetooth": "Enable Bluetooth",
		"DisableBluetooth": "Disable Bluetooth",
		"SearchDescription": "Search favorite songs / singer",
		"Close": "Close",
		"Retry": "Retry",
		"ExpiredDescription": "The session has expired, please scan the QR code!",
		"FailedDescription": "operation failed!",
		"SuccessDescription": "Operation succeeded!",
		"Loading": "Loading, please wait..."
	};

	var LanguageUG = {
		"Song": "ناخشا",
		"Singers": "ناخشىچى",
		"NewSongs": "يېڭى",
		"Hot": "ئالقىشلىق",
		"Type": "تۈر",
		"Language": "تىل",
		"Search": "ئىزدەش",
		"Select": "تاللاش",
		"Selected": "تاللانغىنى",
		"SelectedSongs": "تاللانغىنى",
		"SingedSongs": "ئېيتىلغىنى",
		"Sound": "ئاۋاز",
		"Music": "ناخشا",
		"Mic": "مىكروفون",
		"Effect": "ياڭراق",
		"MoodWhistle": "ئالقىش",
		"MoodApplaudShort": "چاۋاك‏",
		"MoodApplaudLong": "مەسخىرە",
		"MoodSmile": "كۈلۈش",
		"Replay": "قايتىلاش",
		"SongMode": "تەڭكەش",
		"NexSong": "يۆتكەش",
		"Pause": "توختاش",
		"Bluetooth": "لەنيا",
		"Enable": "ئېچىش",
		"Disable": "ئىتىش",
		"Control": "كونترول",
		"Other": "باشقا",
		"All": "بارلىق",
		"MainlandSinger": "ئىچكىرىلىك ناخشىچى",
		"IslandSinger": "ئاراللىق ناخشىچى",
		"UyghurSinger": "ئۇيغۇر ناخشىچى",
		"ForeignSinger": "چەتئەللىك ناخشىچى",
		"MaleSingerNew": "ئەر ناخشىچى",
		"FemaleSingerNew": "ئايال ناخشىچى",
		"Group": "گۇرۇپ",
		"Country_China": "جوڭگۇ",
		"China_GT": "جۇڭگۇ(ئارال)‏",
		"CountryChinaUG": "جوڭگۇ(ئۇيغۇرچە)‏",
		"CountryKoriya": "كورىيە",
		"CountryIndia": "ھىندىستان",
		"CountryUzbik": "ئۆزبىكىستان",
		"CountryEnglish": "ياۋرو ئامىركا",
		"SongTypePop": "مودا ناخشا",
		"SongTypeDance": "ئۇسۇللۇق ناخشا",
		"SongTypeOld": "كونا ناخشا",
		"SongTypeFolk": "خەلق ناخشىسى",
		"SongTypeChild": "بالىلار ناخشىسى",
		"SongTypeDrama": "مۇقام‎12",
		"DJ": "DJ",
		"ChangeLanguage": "تىل ئالماشتۇرۇش",
		"SendMessage": "خەت ئەۋەتىش",
		"UploadFile": "ھۆججەت ئەۋەتىش",
		"EnableBluetooth": "لەنيا ئېچىش",
		"DisableBluetooth": "لەنيا ئىتىش",
		"SearchDescription": "ئامراق ناخشا / ناخشىچى ئىزدەش",
		"Close": "ئۆچۈرۈش",
		"Retry": "قايتا سىناش",
		"ExpiredDescription": "ئالاقە مەلەلدىن قالدى، ئىككىلىك كودنى قايتا سىكانىرلاڭ!‏",
		"FailedDescription": "مەشخۇلات مەغلۇپ بولدى!‏",
		"SuccessDescription": "مەشخۇلات ئۇتۇقلۇق بولدى !‏",
		"Loading": "سەل تەخىر قىلىڭ...‏"
	};

exports.LanguageZH = LanguageZH
exports.LanguageEN = LanguageEN,
exports.LanguageUG = LanguageUG