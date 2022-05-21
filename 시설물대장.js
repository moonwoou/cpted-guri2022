
let main = $("#main");

const items = {
	'가로등': [
		['가로등(10)', '가로등033', '경기 구리시 수택동 490-1', 37.5982944444444, 127.1430500000000, []],
		['가로등(10)', '가로등037', '경기 구리시 수택동 490-1', 37.5980000000000, 127.1432944444440, []],
		['가로등(10)', '가로등133', '경기 구리시 수택동 490-1', 37.5991472222222, 127.1424777777780, []],
		['가로등(10)', '가로등134', '경기 구리시 수택동 490-1', 37.5997583333333, 127.1421750000000, []],
		['가로등(10)', '가로등135', '경기 구리시 수택동 490-1', 37.6000972222222, 127.1419833333330, []],
		['가로등(10)', '가로등136', '경기 구리시 수택동 490-1', 37.6003027777778, 127.1416027777780, []],
		['가로등(10)', '가로등236', '경기 구리시 수택동 360', 37.6010027777778, 127.1415722222220, ['2개 설치']],
		['가로등(10)', '가로등240', '경기 구리시 수택동 360', 37.6012083333333, 127.1419444444440, []],
		['가로등(10)', '가로등246', '경기 구리시 수택동 360', 37.6015277777778, 127.1425638888890, []],
		['가로등(10)', '가로등x01', '경기 구리시 수택동 490-1', 37.5989388888889, 127.1426777777780, []],
	],
	'고보조명': [
		['고보조명(4)', '고보조명x01', '경기 구리시 수택동 527-2', 37.6009611111111, 127.1430583333330, ['커버 없음']],
		['고보조명(4)', '고보조명x02', '경기 구리시 수택동 518-19', 37.5991527777778, 127.1461111111110, []],
		['고보조명(4)', '고보조명x03', '경기 구리시 수택동 521-12', 37.6002833333333, 127.1442638888890, []],
		['고보조명(4)', '고보조명x04', '경기 구리시 수택동 523', 37.5993944444444, 127.1432500000000, ['커버 없음']],
	],
	'공원등': [
		['공원등(13)', '돌다리1', '경기 구리시 수택동 528', 37.6008861111111, 127.1415722222220, []],
		['공원등(13)', '돌다리2', '경기 구리시 수택동 528', 37.6010138888889, 127.1417833333330, []],
		['공원등(13)', '돌다리3', '경기 구리시 수택동 528', 37.6012500000000, 127.1422583333330, []],
		['공원등(13)', '돌다리4', '경기 구리시 수택동 528', 37.6012888888889, 127.1423111111110, []],
		['공원등(13)', '여울목1', '경기 구리시 수택동 526-2', 37.6010444444444, 127.1424555555560, []],
		['공원등(13)', '여울목2', '경기 구리시 수택동 526-2', 37.6010194444444, 127.1423194444440, []],
		['공원등(13)', '여울목3', '경기 구리시 수택동 526-2', 37.6009944444444, 127.1423111111110, []],
		['공원등(13)', '여울목4', '경기 구리시 수택동 526-2', 37.6008944444444, 127.1423416666670, []],
		['공원등(13)', '여울목5', '경기 구리시 수택동 526-2', 37.6009250000000, 127.1424777777780, []],
		['공원등(13)', '여울목6', '경기 구리시 수택동 526-2', 37.6009333333333, 127.1424027777780, []],
		['공원등(13)', '여울목7', '경기 구리시 수택동 526-2', 37.6011083333333, 127.1423805555560, []],
		['공원등(13)', '여울목8', '경기 구리시 수택동 526-2', 37.6010333333333, 127.1423500000000, []],
		['공원등(13)', '여울목9', '경기 구리시 수택동 526-2', 37.6011416666667, 127.1424111111110, []],
	],
	'반사경': [
		['반사경(13)', '반사경x01', '경기 구리시 수택동 542', 37.5997416666667, 127.1472027777780, ['2개 설치']],
		['반사경(13)', '반사경x02', '경기 구리시 수택동 517-3', 37.5992500000000, 127.1455611111110, ['벽돌 기둥 위 고정']],
		['반사경(13)', '반사경x03', '경기 구리시 수택동 517-3', 37.5992361111111, 127.1454000000000, ['벽돌 기둥 위 고정']],
		['반사경(13)', '반사경x04', '경기 구리시 수택동 518-15', 37.5998166666667, 127.1456750000000, ['벽돌 기둥 위 고정']],
		['반사경(13)', '반사경x05', '경기 구리시 수택동 518-2', 37.5999722222222, 127.1456388888890, ['벽돌 기둥 위 고정']],
		['반사경(13)', '반사경x06', '경기 구리시 수택동 539-4', 37.6010194444444, 127.1456972222220, []],
		['반사경(13)', '반사경x07', '경기 구리시 수택동 530-42', 37.6010666666667, 127.1446750000000, []],
		['반사경(13)', '반사경x08', '경기 구리시 수택동 532-13', 37.6013000000000, 127.1443250000000, ['지주 고정']],
		['반사경(13)', '반사경x09', '경기 구리시 수택동 360', 37.6014277777778, 127.1424944444440, []],
		['반사경(13)', '반사경x10', '경기 구리시 수택동 360', 37.6015500000000, 127.1425944444440, []],
		['반사경(13)', '반사경x11', '경기 구리시 수택동 527-2', 37.6010500000000, 127.1430583333330, ['지주 고정']],
		['반사경(13)', '반사경x12', '경기 구리시 수택동 525-21', 37.5999222222222, 127.1427222222220, []],
		['반사경(13)', '반사경x13', '경기 구리시 수택동 530', 37.5997583333333, 127.1468805555560, []],
	],
	'보안등': [
		['보안등(111)', '보안등567', '경기 구리시 수택동 514', '37.5986583333333', '127.1453027777780', []],
		['보안등(111)', '보안등566', '경기 구리시 수택동 517-26', '37.5987444444444', '127.1453777777780'['노란등', '암대']],
		['보안등(111)', '보안등568', '경기 구리시 수택동 515-53', '37.5981166666667', '127.1437138888890', []],
		['보안등(111)', '보안등569', '경기 구리시 수택동 515-55', '37.5982555555556', '127.1435083333330', []],
		['보안등(111)', '보안등570', '경기 구리시 수택동 515-39', '37.5986944444444', '127.1437750000000', []],
		['보안등(111)', '보안등571', '경기 구리시 수택동 515-37', '37.5989416666667', '127.1437611111110', []],
		['보안등(111)', '보안등572', '경기 구리시 수택동 523', '37.5991888888889', '127.1440500000000', []],
		['보안등(111)', '보안등573', '경기 구리시 수택동 523', '37.5991277777778', '127.1442194444440', []],
		['보안등(111)', '보안등574', '경기 구리시 수택동 523', '37.5991472222222', '127.1441027777780', []],
		['보안등(111)', '보안등575', '경기 구리시 수택동 517-18', '37.5991444444444', '127.1448583333330', []],
		['보안등(111)', '보안등576', '경기 구리시 수택동 523', '37.5988916666667', '127.1447750000000', []],
		['보안등(111)', '보안등577', '경기 구리시 수택동 523', '37.5988305555556', '127.1447972222220', []],
		['보안등(111)', '보안등578', '경기 구리시 수택동 516-12', '37.5985750000000', '127.1449138888890', []],
		['보안등(111)', '보안등579', '경기 구리시 수택동 515-52', '37.5981722222222', '127.1440055555560', []],
		['보안등(111)', '보안등580', '경기 구리시 수택동 515-48', '37.5988472222222', '127.1439055555560', ['2개 설치']],
		['보안등(111)', '보안등581', '경기 구리시 수택동 515-52', '37.5989222222222', '127.1435472222220', []],
		['보안등(111)', '보안등582', '경기 구리시 수택동 515-7', '37.5984916666667', '127.1432583333330', ['2개 설치']],
		['보안등(111)', '보안등584', '경기 구리시 수택동 523', '37.5993694444444', '127.1432194444440', []],
		['보안등(111)', '보안등585', '경기 구리시 수택동 523', '37.5992472222222', '127.1435555555560', []],
		['보안등(111)', '보안등586', '경기 구리시 수택동 523', '37.5998416666667', '127.1436527777780', []],
		['보안등(111)', '보안등587', '경기 구리시 수택동 523', '37.5999333333333', '127.1436916666670', []],
		['보안등(111)', '보안등588', '경기 구리시 수택동 523', '37.6000777777778', '127.1438222222220', []],
		['보안등(111)', '보안등589', '경기 구리시 수택동 527-36', '37.6003750000000', '127.1440194444440', ['2개 설치']],
		['보안등(111)', '보안등590', '경기 구리시 수택동 520', '37.6005972222222', '127.1443166666670', ['벽 설치']],
		['보안등(111)', '보안등591', '경기 구리시 수택동 520', '37.6006555555556', '127.1443722222220', []],
		['보안등(111)', '보안등592', '경기 구리시 수택동 527-42', '37.6008000000000', '127.1444555555560', []],
		['보안등(111)', '보안등593', '경기 구리시 수택동 528', '37.6010777777778', '127.1445388888890', ['2개 설치']],
		['보안등(111)', '보안등594', '경기 구리시 수택동 528', '37.6008250000000', '127.1447666666670', []],
		['보안등(111)', '보안등595', '경기 구리시 수택동 521-19', '37.6004722222222', '127.1446305555560', []],
		['보안등(111)', '보안등596', '경기 구리시 수택동 521-12', '37.6003305555556', '127.1443027777780', []],
		['보안등(111)', '보안등597', '경기 구리시 수택동 522-17', '37.5997611111111', '127.1439055555560', []],
		['보안등(111)', '보안등598', '경기 구리시 수택동 522-21', '37.5994916666667', '127.1437694444440', []],
		['보안등(111)', '보안등599', '경기 구리시 수택동 522-21', '37.5994027777778', '127.1438750000000', []],
		['보안등(111)', '보안등600', '경기 구리시 수택동 522-49', '37.5995666666667', '127.1441722222220', []],
		['보안등(111)', '보안등601', '경기 구리시 수택동 522-21', '37.5999250000000', '127.1443638888890', []],
		['보안등(111)', '보안등602', '경기 구리시 수택동 521-28', '37.6000777777778', '127.1445388888890', []],
		['보안등(111)', '보안등603', '경기 구리시 수택동 519', '37.6005666666667', '127.1449583333330', []],
		['보안등(111)', '보안등604', '경기 구리시 수택동 521-32', '37.6003638888889', '127.1448222222220', []],
		['보안등(111)', '보안등605', '경기 구리시 수택동 521-40', '37.5999444444444', '127.1447527777780', []],
		['보안등(111)', '보안등606', '경기 구리시 수택동 521-42', '37.6000777777778', '127.1449055555560', []],
		['보안등(111)', '보안등607', '경기 구리시 수택동 521-43', '37.6001250000000', '127.1449972222220', []],
		['보안등(111)', '보안등608', '경기 구리시 수택동 537', '37.6010444444444', '127.1449750000000', []],
		['보안등(111)', '보안등609', '경기 구리시 수택동 528', '37.6006916666667', '127.1451416666670', []],
		['보안등(111)', '보안등611', '경기 구리시 수택동 522-69', '37.5996083333333', '127.1444638888890', []],
		['보안등(111)', '보안등612', '경기 구리시 수택동 522-66', '37.5994000000000', '127.1443250000000', ['노란등']],
		['보안등(111)', '보안등613', '경기 구리시 수택동 516-21', '37.5988833333333', '127.1440416666670', []],
		['보안등(111)', '보안등614', '경기 구리시 수택동 516-21', '37.5989194444444', '127.1440583333330', ['노란등']],
		['보안등(111)', '보안등615', '경기 구리시 수택동 522-79', '37.5992361111111', '127.1446916666670', []],
		['보안등(111)', '보안등616', '경기 구리시 수택동 522-83', '37.5995361111111', '127.1448833333330', []],
		['보안등(111)', '보안등617', '경기 구리시 수택동 522-84', '37.5996194444444', '127.1449583333330', ['2개 설치']],
		['보안등(111)', '보안등618', '경기 구리시 수택동 521-54', '37.5998472222222', '127.1451194444440', []],
		['보안등(111)', '보안등619', '경기 구리시 수택동 518-13', '37.5996750000000', '127.1452166666670', []],
		['보안등(111)', '보안등620', '경기 구리시 수택동 517-1', '37.5994305555556', '127.1452777777780', []],
		['보안등(111)', '보안등621', '경기 구리시 수택동 520', '37.5995166666667', '127.1452944444440', []],
		['보안등(111)', '보안등622', '경기 구리시 수택동 520', '37.5997583333333', '127.1452333333330', []],
		['보안등(111)', '보안등623', '경기 구리시 수택동 518-16', '37.5998833333333', '127.1456666666670', []],
		['보안등(111)', '보안등624', '경기 구리시 수택동 518-4', '37.5999527777778', '127.1457444444440', []],
		['보안등(111)', '보안등626', '경기 구리시 수택동 539-24', '37.6007333333333', '127.1456388888890', []],
		['보안등(111)', '보안등627', '경기 구리시 수택동 539-23', '37.6006750000000', '127.1454916666670', []],
		['보안등(111)', '보안등628', '경기 구리시 수택동 528', '37.6002777777778', '127.1458194444440', []],
		['보안등(111)', '보안등629', '경기 구리시 수택동 528', '37.5998527777778', '127.1464305555560', []],
		['보안등(111)', '보안등630', '경기 구리시 수택동 528', '37.5998527777778', '127.1464222222220', []],
		['보안등(111)', '보안등631', '경기 구리시 수택동 528', '37.5995861111111', '127.1468888888890', []],
		['보안등(111)', '보안등632', '경기 구리시 수택동 520', '37.5993083333333', '127.1457138888890', []],
		['보안등(111)', '보안등633', '경기 구리시 수택동 517-3', '37.5991583333333', '127.1458444444440', []],
		['보안등(111)', '보안등634', '경기 구리시 수택동 520', '37.5991333333333', '127.1459805555560', []],
		['보안등(111)', '보안등635', '경기 구리시 수택동 518-8', '37.5991250000000', '127.1461500000000', []],
		['보안등(111)', '보안등636', '경기 구리시 수택동 525-51', '37.5995666666667', '127.1427305555560', []],
		['보안등(111)', '보안등637', '경기 구리시 수택동 525-90', '37.5997694444444', '127.1432333333330', ['2개 설치']],
		['보안등(111)', '보안등638', '경기 구리시 수택동 525-90', '37.5998166666667', '127.1431583333330', []],
		['보안등(111)', '보안등639', '경기 구리시 수택동 525-42', '37.6002277777778', '127.1433027777780', []],
		['보안등(111)', '보안등640', '경기 구리시 수택동 525-82', '37.6001972222222', '127.1434777777780', []],
		['보안등(111)', '보안등641', '경기 구리시 수택동 520', '37.6003888888889', '127.1438833333330', []],
		['보안등(111)', '보안등642', '경기 구리시 수택동 520', '37.6003638888889', '127.1438666666670', []],
		['보안등(111)', '보안등643', '경기 구리시 수택동 527-21', '37.6006750000000', '127.1437694444440', []],
		['보안등(111)', '보안등644', '경기 구리시 수택동 528', '37.6010777777778', '127.1442111111110', []],
		['보안등(111)', '보안등645', '경기 구리시 수택동 528', '37.6014888888889', '127.1438138888890', []],
		['보안등(111)', '보안등646', '경기 구리시 수택동 528', '37.6014444444444', '127.1435305555560', []],
		['보안등(111)', '보안등647', '경기 구리시 수택동 527-8', '37.6009972222222', '127.1434111111110', []],
		['보안등(111)', '보안등648', '경기 구리시 수택동 527-6', '37.6007111111111', '127.1434166666670', ['2개 설치']],
		['보안등(111)', '보안등649', '경기 구리시 수택동 525-19', '37.6001777777778', '127.1429055555560', []],
		['보안등(111)', '보안등650', '경기 구리시 수택동 525-3', '37.6000111111111', '127.1426305555560', []],
		['보안등(111)', '보안등651', '경기 구리시 수택동 525-23', '37.5998083333333', '127.1426250000000', []],
		['보안등(111)', '보안등652', '경기 구리시 수택동 524', '37.5996083333333', '127.1424166666670', ['고장']],
		['보안등(111)', '보안등653', '경기 구리시 수택동 525-2', '37.5999722222222', '127.1424722222220', ['등은 안보이고 라벨만 있음']],
		['보안등(111)', '보안등654', '경기 구리시 수택동 526-11', '37.6000444444444', '127.1422416666670', []],
		['보안등(111)', '보안등655', '경기 구리시 수택동 526-21', '37.6003750000000', '127.1422666666670', []],
		['보안등(111)', '보안등656', '경기 구리시 수택동 523', '37.6001777777778', '127.1425694444440', []],
		['보안등(111)', '보안등657', '경기 구리시 수택동 525-8', '37.6004527777778', '127.1428666666670', []],
		['보안등(111)', '보안등658', '경기 구리시 수택동 526-26', '37.6008111111111', '127.1429277777780', []],
		['보안등(111)', '보안등659', '경기 구리시 수택동 523', '37.6005583333333', '127.1430138888890', []],
		['보안등(111)', '보안등660', '경기 구리시 수택동 523', '37.6006138888889', '127.1430888888890', []],
		['보안등(111)', '보안등661', '경기 구리시 수택동 527-2', '37.6012611111111', '127.1433861111110', []],
		['보안등(111)', '보안등662', '경기 구리시 수택동 519', '37.6011972222222', '127.1424416666670', ['고장']],
		['보안등(111)', '보안등663', '경기 구리시 수택동 527', '37.6011083333333', '127.1426611111110', []],
		['보안등(111)', '보안등664', '경기 구리시 수택동 526-2', '37.6008416666667', '127.1425638888890', ['나무사이라 사진 잘 안보일 수 있음']],
		['보안등(111)', '보안등665', '경기 구리시 수택동 526-2', '37.6010777777778', '127.1422666666670', []],
		['보안등(111)', '보안등666', '경기 구리시 수택동 520', '37.6011722222222', '127.1424555555560', ['고장']],
		['보안등(111)', '보안등667', '경기 구리시 수택동 526-2', '37.6009722222222', '127.1423194444440', []],
		['보안등(111)', '보안등668', '경기 구리시 수택동 526-2', '37.6008833333333', '127.1423638888890', []],
		['보안등(111)', '보안등669', '경기 구리시 인창동 263-2', '37.6012416666667', '127.1414111111110', []],
		['보안등(111)', '보안등730', '경기 구리시 수택동 530', '37.6001472222222', '127.1462250000000', ['고장']],
		['보안등(111)', '보안등731', '경기 구리시 수택동 542', '37.5999027777778', '127.1467583333330', []],
		['보안등(111)', '보안등x01', '경기 구리시 수택동 526-3', '37.6007222222222', '127.1420138888890', []],
		['보안등(111)', '보안등x02', '경기 구리시 수택동 515-1', '37.5991083333333', '127.1431722222220', []],
		['보안등(111)', '보안등x03', '경기 구리시 수택동 360', '37.6009777777778', '127.1415166666670', ['고장']],
		['보안등(111)', '보안등x04', '경기 구리시 수택동 514', '37.5981916666667', '127.1442805555560', []],
		['보안등(111)', '보안등x05', '경기 구리시 수택동 517-9', '37.5988111111111', '127.1454861111110', []],
		['보안등(111)', '보안등x06', '경기 구리시 수택동 526-2', '37.6011305555556', '127.1423944444440', []],
		['보안등(111)', '보안등x07', '경기 구리시 수택동 526', '37.6007055555556', '127.1415944444440', ['고장']],
		['보안등(111)', '보안등x08', '경기 구리시 수택동 528', '37.6008111111111', '127.1450416666670', []],
	],
	'신호등': [
		['신호등(8)', '신호등x01', '경기 구리시 수택동 490-1', '37.5979055555556', '127.1434388888890', []],
		['신호등(8)', '신호등x02', '경기 구리시 수택동 490-1', '37.5979638888889', '127.1433027777780', []],
		['신호등(8)', '신호등x03', '경기 구리시 수택동 490-1', '37.5986250000000', '127.1429222222220', []],
		['신호등(8)', '신호등x04', '경기 구리시 수택동 490-1', '37.6000888888889', '127.1418527777780', []],
		['신호등(8)', '신호등x05', '경기 구리시 수택동 360', '37.6010333333333', '127.1416777777780', []],
		['신호등(8)', '신호등x06', '경기 구리시 수택동 528', '37.6008916666667', '127.1415722222220', []],
		['신호등(8)', '신호등x07', '경기 구리시 수택동 490-1', '37.5998611111111', '127.1421194444440', []],
		['신호등(8)', '신호등x08', '경기 구리시 수택동 518-7', '37.5993000000000', '127.1466527777780', []],
	],
	'아파트등': [
		['아파트등(9)', '아파트등x01', '경기 구리시 수택동 517-1', '37.5993527777778', '127.1450194444440', []],
		['아파트등(9)', '아파트등x02', '경기 구리시 수택동 517-1', '37.5994611111111', '127.1452111111110', []],
		['아파트등(9)', '아파트등x03', '경기 구리시 수택동 517-3', '37.5991777777778', '127.1454861111110', []],
		['아파트등(9)', '아파트등x04', '경기 구리시 수택동 517-3', '37.5988722222222', '127.1453555555560', []],
		['아파트등(9)', '아파트등x05', '경기 구리시 수택동 517-1', '37.5993527777778', '127.1451861111110', []],
		['아파트등(9)', '아파트등x06', '경기 구리시 수택동 517-3', '37.5991527777778', '127.1452722222220', []],
		['아파트등(9)', '아파트등x07', '경기 구리시 수택동 517-9', '37.5988000000000', '127.1455000000000', []],
		['아파트등(9)', '아파트등x08', '경기 구리시 수택동 521-53', '37.5997611111111', '127.1451638888890', []],
		['아파트등(9)', '아파트등x09', '경기 구리시 수택동 517-3', '37.5992055555556', '127.1452027777780', []],
	],
	'의류수거함': [
		['의류수거함(12)', '의류수거함A008', '경기 구리시 수택동 517-18', '37.5991833333333', '127.1448888888890', []],
		['의류수거함(12)', '의류수거함A070', '경기 구리시 수택동 520', '37.5996694444444', '127.1451250000000', []],
		['의류수거함(12)', '의류수거함A072', '경기 구리시 수택동 540-6', '37.6005083333333', '127.1457138888890', []],
		['의류수거함(12)', '의류수거함A079', '경기 구리시 수택동 525-90', '37.5998916666667', '127.1427527777780', []],
		['의류수거함(12)', '의류수거함A082', '경기 구리시 수택동 520', '37.6008250000000', '127.1430666666670', []],
		['의류수거함(12)', '의류수거함A083', '경기 구리시 수택동 520', '37.5990722222222', '127.1460722222220', []],
		['의류수거함(12)', '의류수거함A084', '경기 구리시 수택동 541-17', '37.6004138888889', '127.1461111111110', []],
		['의류수거함(12)', '의류수거함A112', '경기 구리시 수택동 528', '37.6009611111111', '127.1447611111110', []],
		['의류수거함(12)', '의류수거함B01-1', '경기 구리시 수택동 528', '37.6004722222222', '127.1454083333330', []],
		['의류수거함(12)', '의류수거함B01-2', '경기 구리시 수택동 525-82', '37.6001888888889', '127.1434944444440', []],
		['의류수거함(12)', '의류수거함B069', '경기 구리시 수택동 530-42', '37.6008111111111', '127.1451333333330', []],
		['의류수거함(12)', '의류수거함B095', '경기 구리시 수택동 528', '37.6013666666667', '127.1438611111110', []],
	],
	'전신주': [

	],
	'주차등': [
		['주차등(21)', '주차등x01', '경기 구리시 수택동 541', '37.6004611111111', '127.1458277777780', []],
		['주차등(21)', '주차등x02', '경기 구리시 수택동 541', '37.6004944444444', '127.1458666666670', []],
		['주차등(21)', '주차등x03', '경기 구리시 수택동 528', '37.6000333333333', '127.1461111111110', []],
		['주차등(21)', '주차등x04', '경기 구리시 수택동 528', '37.5999000000000', '127.1465444444440', []],
		['주차등(21)', '주차등x05', '경기 구리시 수택동 528', '37.5996805555556', '127.1466972222220', []],
		['주차등(21)', '주차등x06', '경기 구리시 수택동 542', '37.5998944444444', '127.1467583333330', []],
		['주차등(21)', '주차등x07', '경기 구리시 수택동 530', '37.5999027777778', '127.1466361111110', []],
		['주차등(21)', '주차등x08', '경기 구리시 수택동 528', '37.5998638888889', '127.1463083333330', []],
		['주차등(21)', '주차등x09', '경기 구리시 수택동 537', '37.6009111111111', '127.1451805555560', []],
		['주차등(21)', '주차등x10', '경기 구리시 수택동 528', '37.6006194444444', '127.1452638888890', []],
		['주차등(21)', '주차등x11', '경기 구리시 수택동 536-5', '37.6011083333333', '127.1448222222220', []],
		['주차등(21)', '주차등x12', '경기 구리시 수택동 537', '37.6010500000000', '127.1448361111110', []],
		['주차등(21)', '주차등x13', '경기 구리시 수택동 530-42', '37.6012083333333', '127.1444694444440', []],
		['주차등(21)', '주차등x14', '경기 구리시 수택동 532-13', '37.6013638888889', '127.1446083333330', []],
		['주차등(21)', '주차등x15', '경기 구리시 수택동 528', '37.6013666666667', '127.1439972222220', []],
		['주차등(21)', '주차등x16', '경기 구리시 수택동 360', '37.6017305555556', '127.1430444444440', []],
		['주차등(21)', '주차등x17', '경기 구리시 수택동 531', '37.6016694444444', '127.1431416666670', []],
		['주차등(21)', '주차등x18', '경기 구리시 수택동 400-8', '37.6015972222222', '127.1424416666670', []],
		['주차등(21)', '주차등x19', '경기 구리시 수택동 360', '37.6015138888889', '127.1426083333330', []],
		['주차등(21)', '주차등x20', '경기 구리시 수택동 530', '37.6015638888889', '127.1433722222220', []],
		['주차등(21)', '주차등x21', '경기 구리시 수택동 360', '37.6015916666667', '127.1427833333330', []],
	],
	'통신주': [

	],
	'표지판': [
		['표지판(3)', '교통표지판x01', '경기 구리시 수택동 400-8', '37.6017194444444', '127.1428000000000', ['대형 전광판']],
		['표지판(3)', '교통표지판x02', '경기 구리시 수택동 490-1', '37.5983166666667', '127.1430444444440', []],
		['표지판(3)', '교통표지판x03', '경기 구리시 수택동 526', '37.6007694444444', '127.1416333333330', []],

	],
	'쓰레기무단투기': [
		['쓰레기무단투기(2)', '쓰레기무단투기x01', '경기 구리시 수택동 528', '37.6008250000000', '127.1449194444440', []],
		['쓰레기무단투기(2)', '쓰레기무단투기x02', '경기 구리시 수택동 530', '37.6013444444444', '127.1441583333330', []],
	],
	'CCTV-SOS': [
		['CCTV-SOS(11)', 'CCTV-A-수-001-SOS', '경기 구리시 수택동 523', '37.5993000000000', '127.1432638888890', []],
		['CCTV-SOS(11)', 'CCTV-A-수-002-SOS', '경기 구리시 수택동 532-11', '37.6011000000000', '127.1447527777780', []],
		['CCTV-SOS(11)', 'CCTV-A-수-005-SOS', '경기 구리시 수택동 521-12', '37.6003277777778', '127.1442861111110', []],
		['CCTV-SOS(11)', 'CCTV-A-수-010-SOS', '경기 구리시 수택동 517-18', '37.5991944444444', '127.1448666666670', []],
		['CCTV-SOS(11)', 'CCTV-A-수-013-SOS', '경기 구리시 수택동 520', '37.6008250000000', '127.1431277777780', []],
		['CCTV-SOS(11)', 'CCTV-A-수-025-SOS', '경기 구리시 수택동 539-19', '37.6008000000000', '127.1456000000000', []],
		['CCTV-SOS(11)', 'CCTV-A-수-029-SOS', '경기 구리시 수택동 526-2', '37.6008805555556', '127.1424333333330', []],
		['CCTV-SOS(11)', 'CCTV-A-수-031-SOS', '경기 구리시 수택동 514', '37.5988083333333', '127.1457055555560', []],
		['CCTV-SOS(11)', 'CCTV-A-수-032-SOS', '경기 구리시 수택동 523', '37.6001583333333', '127.1425083333330', []],
		['CCTV-SOS(11)', 'CCTV-A-수-033-SOS', '경기 구리시 수택동 523', '37.6000777777778', '127.1438611111110', []],
		['CCTV-SOS(11)', 'CCTV-A-수-034-SOS', '경기 구리시 수택동 522-61', '37.5992083333333', '127.1440416666670', []],
	],
	'CCTV-벨': [
		['CCTV-벨(6)', 'CCTV-A-수-022', '경기 구리시 수택동 490-1', '37.5979166666667', '127.1433861111110', []],
		['CCTV-벨(6)', 'CCTV-A-수-039', '경기 구리시 수택동 515-55', '37.5982944444444', '127.1436000000000', []],
		['CCTV-벨(6)', 'CCTV-A-수-043', '경기 구리시 수택동 528', '37.5995416666667', '127.1469583333330', []],
		['CCTV-벨(6)', 'CCTV-A-수-045', '경기 구리시 수택동 525-24', '37.5997194444444', '127.1424861111110', []],
		['CCTV-벨(6)', 'CCTV-A-수-047', '경기 구리시 수택동 518-13', '37.5996750000000', '127.1452027777780', []],
		['CCTV-벨(6)', 'CCTV-A-수-049', '경기 구리시 수택동 537', '37.6009750000000', '127.1449194444440', []],
	],
	'CCTV-멀티': [
		['CCTV-멀티(9)', 'CCTV-A-수-005-멀티1', '경기 구리시 수택동 521-39', '37.6002416666667', '127.1449888888890', []],
		['CCTV-멀티(9)', 'CCTV-A-수-005-멀티2', '경기 구리시 수택동 521-23', '37.6003500000000', '127.1447000000000', []],
		['CCTV-멀티(9)', 'CCTV-A-수-010-멀티', '경기 구리시 수택동 517', '37.5991527777778', '127.1447222222220', []],
		['CCTV-멀티(9)', 'CCTV-A-수-013-멀티', '경기 구리시 수택동 527-13', '37.6006888888889', '127.1434638888890', []],
		['CCTV-멀티(9)', 'CCTV-A-수-032-멀티', '경기 구리시 수택동 525-90', '37.5999611111111', '127.1427777777780', []],
		['CCTV-멀티(9)', 'CCTV-A-수-033-멀티', '경기 구리시 수택동 525-90', '37.6000555555556', '127.1433027777780', []],
		['CCTV-멀티(9)', 'CCTV-A-수-034-멀티1', '경기 구리시 수택동 523', '37.5987777777778', '127.1439666666670', []],
		['CCTV-멀티(9)', 'CCTV-A-수-034-멀티2', '경기 구리시 수택동 522-42', '37.5994611111111', '127.1439277777780', []],
		['CCTV-멀티(9)', 'CCTV-A-수-034-멀티3', '경기 구리시 수택동 522-21', '37.5994750000000', '127.1437916666670', []],
	],
};

const item = items.가로등;

for (let i = 0; i < item.length; i++) {
	const element = item[i];

	let article = `
	<div class="w3-contqainer w3-green">
		<h1>시설물 관리대장 > ` + element[0] + `</h1> 
		<p class="txt-right">` + i + ` / ` + item.length + `</p> 
	</div>
	<div class="w3-row-padding">
		<div class="w3-half">
			<hr />
			<h3>` + element[1] + `</h3>
			<p>- 주소 : ` + element[2] + `</p>
			<p>- 위도 : ` + element[3] + `</p>
			<p>- 경도 : ` + element[4] + `</p>
			<hr />
			<h3>비고</h3>
			<p>` + (element[5][0] == undefined ? "" : "- " + element[5][0]) + `</p>
			<p>` + (element[5][1] == undefined ? "" : "- " + element[5][1]) + `</p>
			<p>` + (element[5][2] == undefined ? "" : "- " + element[5][2]) + `</p>
			<p>` + (element[5][3] == undefined ? "" : "- " + element[5][3]) + `</p>
			<p>` + (element[5][4] == undefined ? "" : "- " + element[5][4]) + `</p>
			<p>` + (element[5][5] == undefined ? "" : "- " + element[5][5]) + `</p>
			<p>` + (element[5][6] == undefined ? "" : "- " + element[5][6]) + `</p>
			<p>` + (element[5][7] == undefined ? "" : "- " + element[5][7]) + `</p>
			<p>` + (element[5][8] == undefined ? "" : "- " + element[5][8]) + `</p>
			<p>` + (element[5][9] == undefined ? "" : "- " + element[5][9]) + `</p>
		</div>
		<div class="w3-half">
			<img src="./images/` + element[0] + `/` + element[1] + `.jpeg" class="sisul" />
		</div>
	</div>

	<div class="page"></div>
	`;

	main.append(article);
}

