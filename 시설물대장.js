const items = {
	가로등: [
		['가로등(10)', '가로등033', '경기 구리시 수택동 490-1', 37.5982944444444, 127.14305, []],
		// ['가로등(10)', '가로등037', '경기 구리시 수택동 490-1', 37.598, 127.143294444444, []],
		// ['가로등(10)', '가로등133', '경기 구리시 수택동 490-1', 37.5991472222222, 127.142477777778, []],
		// ['가로등(10)', '가로등134', '경기 구리시 수택동 490-1', 37.5997583333333, 127.142175, []],
		// ['가로등(10)', '가로등135', '경기 구리시 수택동 490-1', 37.6000972222222, 127.141983333333, []],
		// ['가로등(10)', '가로등136', '경기 구리시 수택동 490-1', 37.6003027777778, 127.141602777778, []],
		['가로등(10)', '가로등236', '경기 구리시 수택동 360', 37.6010027777778, 127.141572222222, ['2개 설치']],
		// ['가로등(10)', '가로등240', '경기 구리시 수택동 360', 37.6012083333333, 127.141944444444, []],
		// ['가로등(10)', '가로등246', '경기 구리시 수택동 360', 37.6015277777778, 127.142563888889, []],
		// ['가로등(10)', '가로등x01', '경기 구리시 수택동 490-1', 37.5989388888889, 127.142677777778, []],
	// ],
	// 고보조명: [
	// 	['고보조명(4)', '고보조명x01', '경기 구리시 수택동 527-2', 37.6009611111111, 127.143058333333, ['커버 없음']],
	// 	['고보조명(4)', '고보조명x02', '경기 구리시 수택동 518-19', 37.5991527777778, 127.146111111111, []],
	// 	['고보조명(4)', '고보조명x03', '경기 구리시 수택동 521-12', 37.6002833333333, 127.144263888889, []],
	// 	['고보조명(4)', '고보조명x04', '경기 구리시 수택동 523', 37.5993944444444, 127.14325, ['커버 없음']],
	// ],
	// 공원등: [
	// 	['공원등(13)', '돌다리1', '경기 구리시 수택동 528', 37.6008861111111, 127.141572222222, []],
	// 	['공원등(13)', '돌다리2', '경기 구리시 수택동 528', 37.6010138888889, 127.141783333333, []],
	// 	['공원등(13)', '돌다리3', '경기 구리시 수택동 528', 37.60125, 127.142258333333, []],
	// 	['공원등(13)', '돌다리4', '경기 구리시 수택동 528', 37.6012888888889, 127.142311111111, []],
	// 	['공원등(13)', '여울목1', '경기 구리시 수택동 526-2', 37.6010444444444, 127.142455555556, []],
	// 	['공원등(13)', '여울목2', '경기 구리시 수택동 526-2', 37.6010194444444, 127.142319444444, []],
	// 	['공원등(13)', '여울목3', '경기 구리시 수택동 526-2', 37.6009944444444, 127.142311111111, []],
	// 	['공원등(13)', '여울목4', '경기 구리시 수택동 526-2', 37.6008944444444, 127.142341666667, []],
	// 	['공원등(13)', '여울목5', '경기 구리시 수택동 526-2', 37.600925, 127.142477777778, []],
	// 	['공원등(13)', '여울목6', '경기 구리시 수택동 526-2', 37.6009333333333, 127.142402777778, []],
	// 	['공원등(13)', '여울목7', '경기 구리시 수택동 526-2', 37.6011083333333, 127.142380555556, []],
	// 	['공원등(13)', '여울목8', '경기 구리시 수택동 526-2', 37.6010333333333, 127.14235, []],
	// 	['공원등(13)', '여울목9', '경기 구리시 수택동 526-2', 37.6011416666667, 127.142411111111, []],
	// ],
	// 반사경: [
	// 	['반사경(13)', '반사경x01', '경기 구리시 수택동 542', 37.5997416666667, 127.147202777778, ['2개 설치']],
	// 	['반사경(13)', '반사경x02', '경기 구리시 수택동 517-3', 37.59925, 127.145561111111, ['벽돌 기둥 위 고정']],
	// 	['반사경(13)', '반사경x03', '경기 구리시 수택동 517-3', 37.5992361111111, 127.1454, ['벽돌 기둥 위 고정']],
	// 	['반사경(13)', '반사경x04', '경기 구리시 수택동 518-15', 37.5998166666667, 127.145675, ['벽돌 기둥 위 고정']],
	// 	['반사경(13)', '반사경x05', '경기 구리시 수택동 518-2', 37.5999722222222, 127.145638888889, ['벽돌 기둥 위 고정']],
	// 	['반사경(13)', '반사경x06', '경기 구리시 수택동 539-4', 37.6010194444444, 127.145697222222, []],
	// 	['반사경(13)', '반사경x07', '경기 구리시 수택동 530-42', 37.6010666666667, 127.144675, []],
	// 	['반사경(13)', '반사경x08', '경기 구리시 수택동 532-13', 37.6013, 127.144325, ['지주 고정']],
	// 	['반사경(13)', '반사경x09', '경기 구리시 수택동 360', 37.6014277777778, 127.142494444444, []],
	// 	['반사경(13)', '반사경x10', '경기 구리시 수택동 360', 37.60155, 127.142594444444, []],
	// 	['반사경(13)', '반사경x11', '경기 구리시 수택동 527-2', 37.60105, 127.143058333333, ['지주 고정']],
	// 	['반사경(13)', '반사경x12', '경기 구리시 수택동 525-21', 37.5999222222222, 127.142722222222, []],
	// 	['반사경(13)', '반사경x13', '경기 구리시 수택동 530', 37.5997583333333, 127.146880555556, []],
	// ],
	// 보안등: [
	// 	['보안등(111)', '보안등567', '경기 구리시 수택동 514', 37.5986583333333, 127.145302777778, []],
	// 	['보안등(111)', '보안등566', '경기 구리시 수택동 517-26', 37.5987444444444, 127.145377777778, ['노란등', '암대']],
	// 	['보안등(111)', '보안등568', '경기 구리시 수택동 515-53', 37.5981166666667, 127.143713888889, []],
	// 	['보안등(111)', '보안등569', '경기 구리시 수택동 515-55', 37.5982555555556, 127.143508333333, []],
	// 	['보안등(111)', '보안등570', '경기 구리시 수택동 515-39', 37.5986944444444, 127.143775, []],
	// 	['보안등(111)', '보안등571', '경기 구리시 수택동 515-37', 37.5989416666667, 127.143761111111, []],
	// 	['보안등(111)', '보안등572', '경기 구리시 수택동 523', 37.5991888888889, 127.14405, []],
	// 	['보안등(111)', '보안등573', '경기 구리시 수택동 523', 37.5991277777778, 127.144219444444, []],
	// 	['보안등(111)', '보안등574', '경기 구리시 수택동 523', 37.5991472222222, 127.144102777778, []],
	// 	['보안등(111)', '보안등575', '경기 구리시 수택동 517-18', 37.5991444444444, 127.144858333333, []],
	// 	['보안등(111)', '보안등576', '경기 구리시 수택동 523', 37.5988916666667, 127.144775, []],
	// 	['보안등(111)', '보안등577', '경기 구리시 수택동 523', 37.5988305555556, 127.144797222222, []],
	// 	['보안등(111)', '보안등578', '경기 구리시 수택동 516-12', 37.598575, 127.144913888889, []],
	// 	['보안등(111)', '보안등579', '경기 구리시 수택동 515-52', 37.5981722222222, 127.144005555556, []],
	// 	['보안등(111)', '보안등580', '경기 구리시 수택동 515-48', 37.5988472222222, 127.143905555556, ['2개 설치']],
	// 	['보안등(111)', '보안등581', '경기 구리시 수택동 515-52', 37.5989222222222, 127.143547222222, []],
	// 	['보안등(111)', '보안등582', '경기 구리시 수택동 515-7', 37.5984916666667, 127.143258333333, ['2개 설치']],
	// 	['보안등(111)', '보안등584', '경기 구리시 수택동 523', 37.5993694444444, 127.143219444444, []],
	// 	['보안등(111)', '보안등585', '경기 구리시 수택동 523', 37.5992472222222, 127.143555555556, []],
	// 	['보안등(111)', '보안등586', '경기 구리시 수택동 523', 37.5998416666667, 127.143652777778, []],
	// 	['보안등(111)', '보안등587', '경기 구리시 수택동 523', 37.5999333333333, 127.143691666667, []],
	// 	['보안등(111)', '보안등588', '경기 구리시 수택동 523', 37.6000777777778, 127.143822222222, []],
	// 	['보안등(111)', '보안등589', '경기 구리시 수택동 527-36', 37.600375, 127.144019444444, ['2개 설치']],
	// 	['보안등(111)', '보안등590', '경기 구리시 수택동 520', 37.6005972222222, 127.144316666667, ['벽 설치']],
	// 	['보안등(111)', '보안등591', '경기 구리시 수택동 520', 37.6006555555556, 127.144372222222, []],
	// 	['보안등(111)', '보안등592', '경기 구리시 수택동 527-42', 37.6008, 127.144455555556, []],
	// 	['보안등(111)', '보안등593', '경기 구리시 수택동 528', 37.6010777777778, 127.144538888889, ['2개 설치']],
	// 	['보안등(111)', '보안등594', '경기 구리시 수택동 528', 37.600825, 127.144766666667, []],
	// 	['보안등(111)', '보안등595', '경기 구리시 수택동 521-19', 37.6004722222222, 127.144630555556, []],
	// 	['보안등(111)', '보안등596', '경기 구리시 수택동 521-12', 37.6003305555556, 127.144302777778, []],
	// 	['보안등(111)', '보안등597', '경기 구리시 수택동 522-17', 37.5997611111111, 127.143905555556, []],
	// 	['보안등(111)', '보안등598', '경기 구리시 수택동 522-21', 37.5994916666667, 127.143769444444, []],
	// 	['보안등(111)', '보안등599', '경기 구리시 수택동 522-21', 37.5994027777778, 127.143875, []],
	// 	['보안등(111)', '보안등600', '경기 구리시 수택동 522-49', 37.5995666666667, 127.144172222222, []],
	// 	['보안등(111)', '보안등601', '경기 구리시 수택동 522-21', 37.599925, 127.144363888889, []],
	// 	['보안등(111)', '보안등602', '경기 구리시 수택동 521-28', 37.6000777777778, 127.144538888889, []],
	// 	['보안등(111)', '보안등603', '경기 구리시 수택동 519', 37.6005666666667, 127.144958333333, []],
	// 	['보안등(111)', '보안등604', '경기 구리시 수택동 521-32', 37.6003638888889, 127.144822222222, []],
	// 	['보안등(111)', '보안등605', '경기 구리시 수택동 521-40', 37.5999444444444, 127.144752777778, []],
	// 	['보안등(111)', '보안등606', '경기 구리시 수택동 521-42', 37.6000777777778, 127.144905555556, []],
	// 	['보안등(111)', '보안등607', '경기 구리시 수택동 521-43', 37.600125, 127.144997222222, []],
	// 	['보안등(111)', '보안등608', '경기 구리시 수택동 537', 37.6010444444444, 127.144975, []],
	// 	['보안등(111)', '보안등609', '경기 구리시 수택동 528', 37.6006916666667, 127.145141666667, []],
	// 	['보안등(111)', '보안등611', '경기 구리시 수택동 522-69', 37.5996083333333, 127.144463888889, []],
	// 	['보안등(111)', '보안등612', '경기 구리시 수택동 522-66', 37.5994, 127.144325, ['노란등']],
	// 	['보안등(111)', '보안등613', '경기 구리시 수택동 516-21', 37.5988833333333, 127.144041666667, []],
	// 	['보안등(111)', '보안등614', '경기 구리시 수택동 516-21', 37.5989194444444, 127.144058333333, ['노란등']],
	// 	['보안등(111)', '보안등615', '경기 구리시 수택동 522-79', 37.5992361111111, 127.144691666667, []],
	// 	['보안등(111)', '보안등616', '경기 구리시 수택동 522-83', 37.5995361111111, 127.144883333333, []],
	// 	['보안등(111)', '보안등617', '경기 구리시 수택동 522-84', 37.5996194444444, 127.144958333333, ['2개 설치']],
	// 	['보안등(111)', '보안등618', '경기 구리시 수택동 521-54', 37.5998472222222, 127.145119444444, []],
	// 	['보안등(111)', '보안등619', '경기 구리시 수택동 518-13', 37.599675, 127.145216666667, []],
	// 	['보안등(111)', '보안등620', '경기 구리시 수택동 517-1', 37.5994305555556, 127.145277777778, []],
	// 	['보안등(111)', '보안등621', '경기 구리시 수택동 520', 37.5995166666667, 127.145294444444, []],
	// 	['보안등(111)', '보안등622', '경기 구리시 수택동 520', 37.5997583333333, 127.145233333333, []],
	// 	['보안등(111)', '보안등623', '경기 구리시 수택동 518-16', 37.5998833333333, 127.145666666667, []],
	// 	['보안등(111)', '보안등624', '경기 구리시 수택동 518-4', 37.5999527777778, 127.145744444444, []],
	// 	['보안등(111)', '보안등626', '경기 구리시 수택동 539-24', 37.6007333333333, 127.145638888889, []],
	// 	['보안등(111)', '보안등627', '경기 구리시 수택동 539-23', 37.600675, 127.145491666667, []],
	// 	['보안등(111)', '보안등628', '경기 구리시 수택동 528', 37.6002777777778, 127.145819444444, []],
	// 	['보안등(111)', '보안등629', '경기 구리시 수택동 528', 37.5998527777778, 127.146430555556, []],
	// 	['보안등(111)', '보안등630', '경기 구리시 수택동 528', 37.5998527777778, 127.146422222222, []],
	// 	['보안등(111)', '보안등631', '경기 구리시 수택동 528', 37.5995861111111, 127.146888888889, []],
	// 	['보안등(111)', '보안등632', '경기 구리시 수택동 520', 37.5993083333333, 127.145713888889, []],
	// 	['보안등(111)', '보안등633', '경기 구리시 수택동 517-3', 37.5991583333333, 127.145844444444, []],
	// 	['보안등(111)', '보안등634', '경기 구리시 수택동 520', 37.5991333333333, 127.145980555556, []],
	// 	['보안등(111)', '보안등635', '경기 구리시 수택동 518-8', 37.599125, 127.14615, []],
	// 	['보안등(111)', '보안등636', '경기 구리시 수택동 525-51', 37.5995666666667, 127.142730555556, []],
	// 	['보안등(111)', '보안등637', '경기 구리시 수택동 525-90', 37.5997694444444, 127.143233333333, ['2개 설치']],
	// 	['보안등(111)', '보안등638', '경기 구리시 수택동 525-90', 37.5998166666667, 127.143158333333, []],
	// 	['보안등(111)', '보안등639', '경기 구리시 수택동 525-42', 37.6002277777778, 127.143302777778, []],
	// 	['보안등(111)', '보안등640', '경기 구리시 수택동 525-82', 37.6001972222222, 127.143477777778, []],
	// 	['보안등(111)', '보안등641', '경기 구리시 수택동 520', 37.6003888888889, 127.143883333333, []],
	// 	['보안등(111)', '보안등642', '경기 구리시 수택동 520', 37.6003638888889, 127.143866666667, []],
	// 	['보안등(111)', '보안등643', '경기 구리시 수택동 527-21', 37.600675, 127.143769444444, []],
	// 	['보안등(111)', '보안등644', '경기 구리시 수택동 528', 37.6010777777778, 127.144211111111, []],
	// 	['보안등(111)', '보안등645', '경기 구리시 수택동 528', 37.6014888888889, 127.143813888889, []],
	// 	['보안등(111)', '보안등646', '경기 구리시 수택동 528', 37.6014444444444, 127.143530555556, []],
	// 	['보안등(111)', '보안등647', '경기 구리시 수택동 527-8', 37.6009972222222, 127.143411111111, []],
	// 	['보안등(111)', '보안등648', '경기 구리시 수택동 527-6', 37.6007111111111, 127.143416666667, ['2개 설치']],
	// 	['보안등(111)', '보안등649', '경기 구리시 수택동 525-19', 37.6001777777778, 127.142905555556, []],
	// 	['보안등(111)', '보안등650', '경기 구리시 수택동 525-3', 37.6000111111111, 127.142630555556, []],
	// 	['보안등(111)', '보안등651', '경기 구리시 수택동 525-23', 37.5998083333333, 127.142625, []],
	// 	['보안등(111)', '보안등652', '경기 구리시 수택동 524', 37.5996083333333, 127.142416666667, ['고장']],
	// 	['보안등(111)', '보안등653', '경기 구리시 수택동 525-2', 37.5999722222222, 127.142472222222, ['등은 안보이고 라벨만 있음']],
	// 	['보안등(111)', '보안등654', '경기 구리시 수택동 526-11', 37.6000444444444, 127.142241666667, []],
	// 	['보안등(111)', '보안등655', '경기 구리시 수택동 526-21', 37.600375, 127.142266666667, []],
	// 	['보안등(111)', '보안등656', '경기 구리시 수택동 523', 37.6001777777778, 127.142569444444, []],
	// 	['보안등(111)', '보안등657', '경기 구리시 수택동 525-8', 37.6004527777778, 127.142866666667, []],
	// 	['보안등(111)', '보안등658', '경기 구리시 수택동 526-26', 37.6008111111111, 127.142927777778, []],
	// 	['보안등(111)', '보안등659', '경기 구리시 수택동 523', 37.6005583333333, 127.143013888889, []],
	// 	['보안등(111)', '보안등660', '경기 구리시 수택동 523', 37.6006138888889, 127.143088888889, []],
	// 	['보안등(111)', '보안등661', '경기 구리시 수택동 527-2', 37.6012611111111, 127.143386111111, []],
	// 	['보안등(111)', '보안등662', '경기 구리시 수택동 519', 37.6011972222222, 127.142441666667, ['고장']],
	// 	['보안등(111)', '보안등663', '경기 구리시 수택동 527', 37.6011083333333, 127.142661111111, []],
	// 	['보안등(111)', '보안등664', '경기 구리시 수택동 526-2', 37.6008416666667, 127.142563888889, ['나무사이라 사진 잘 안보일 수 있음']],
	// 	['보안등(111)', '보안등665', '경기 구리시 수택동 526-2', 37.6010777777778, 127.142266666667, []],
	// 	['보안등(111)', '보안등666', '경기 구리시 수택동 520', 37.6011722222222, 127.142455555556, ['고장']],
	// 	['보안등(111)', '보안등667', '경기 구리시 수택동 526-2', 37.6009722222222, 127.142319444444, []],
	// 	['보안등(111)', '보안등668', '경기 구리시 수택동 526-2', 37.6008833333333, 127.142363888889, []],
	// 	['보안등(111)', '보안등669', '경기 구리시 인창동 263-2', 37.6012416666667, 127.141411111111, []],
	// 	['보안등(111)', '보안등730', '경기 구리시 수택동 530', 37.6001472222222, 127.146225, ['고장']],
	// 	['보안등(111)', '보안등731', '경기 구리시 수택동 542', 37.5999027777778, 127.146758333333, []],
	// 	['보안등(111)', '보안등x01', '경기 구리시 수택동 526-3', 37.6007222222222, 127.142013888889, []],
	// 	['보안등(111)', '보안등x02', '경기 구리시 수택동 515-1', 37.5991083333333, 127.143172222222, []],
	// 	['보안등(111)', '보안등x03', '경기 구리시 수택동 360', 37.6009777777778, 127.141516666667, ['고장']],
	// 	['보안등(111)', '보안등x04', '경기 구리시 수택동 514', 37.5981916666667, 127.144280555556, []],
	// 	['보안등(111)', '보안등x05', '경기 구리시 수택동 517-9', 37.5988111111111, 127.145486111111, []],
	// 	['보안등(111)', '보안등x06', '경기 구리시 수택동 526-2', 37.6011305555556, 127.142394444444, []],
	// 	['보안등(111)', '보안등x07', '경기 구리시 수택동 526', 37.6007055555556, 127.141594444444, ['고장']],
	// 	['보안등(111)', '보안등x08', '경기 구리시 수택동 528', 37.6008111111111, 127.145041666667, []],
	// ],
	// 신호등: [
	// 	['신호등(8)', '신호등x01', '경기 구리시 수택동 490-1', 37.5979055555556, 127.143438888889, []],
	// 	['신호등(8)', '신호등x02', '경기 구리시 수택동 490-1', 37.5979638888889, 127.143302777778, []],
	// 	['신호등(8)', '신호등x03', '경기 구리시 수택동 490-1', 37.598625, 127.142922222222, []],
	// 	['신호등(8)', '신호등x04', '경기 구리시 수택동 490-1', 37.6000888888889, 127.141852777778, []],
	// 	['신호등(8)', '신호등x05', '경기 구리시 수택동 360', 37.6010333333333, 127.141677777778, []],
	// 	['신호등(8)', '신호등x06', '경기 구리시 수택동 528', 37.6008916666667, 127.141572222222, []],
	// 	['신호등(8)', '신호등x07', '경기 구리시 수택동 490-1', 37.5998611111111, 127.142119444444, []],
	// 	['신호등(8)', '신호등x08', '경기 구리시 수택동 518-7', 37.5993, 127.146652777778, []],
	// ],
	// 아파트등: [
	// 	['아파트등(9)', '아파트등x01', '경기 구리시 수택동 517-1', 37.5993527777778, 127.145019444444, []],
	// 	['아파트등(9)', '아파트등x02', '경기 구리시 수택동 517-1', 37.5994611111111, 127.145211111111, []],
	// 	['아파트등(9)', '아파트등x03', '경기 구리시 수택동 517-3', 37.5991777777778, 127.145486111111, []],
	// 	['아파트등(9)', '아파트등x04', '경기 구리시 수택동 517-3', 37.5988722222222, 127.145355555556, []],
	// 	['아파트등(9)', '아파트등x05', '경기 구리시 수택동 517-1', 37.5993527777778, 127.145186111111, []],
	// 	['아파트등(9)', '아파트등x06', '경기 구리시 수택동 517-3', 37.5991527777778, 127.145272222222, []],
	// 	['아파트등(9)', '아파트등x07', '경기 구리시 수택동 517-9', 37.5988, 127.1455, []],
	// 	['아파트등(9)', '아파트등x08', '경기 구리시 수택동 521-53', 37.5997611111111, 127.145163888889, []],
	// 	['아파트등(9)', '아파트등x09', '경기 구리시 수택동 517-3', 37.5992055555556, 127.145202777778, []],
	// ],
	// 의류수거함: [
	// 	['의류수거함(12)', '의류수거함A008', '경기 구리시 수택동 517-18', 37.5991833333333, 127.144888888889, []],
	// 	['의류수거함(12)', '의류수거함A070', '경기 구리시 수택동 520', 37.5996694444444, 127.145125, []],
	// 	['의류수거함(12)', '의류수거함A072', '경기 구리시 수택동 540-6', 37.6005083333333, 127.145713888889, []],
	// 	['의류수거함(12)', '의류수거함A079', '경기 구리시 수택동 525-90', 37.5998916666667, 127.142752777778, []],
	// 	['의류수거함(12)', '의류수거함A082', '경기 구리시 수택동 520', 37.600825, 127.143066666667, []],
	// 	['의류수거함(12)', '의류수거함A083', '경기 구리시 수택동 520', 37.5990722222222, 127.146072222222, []],
	// 	['의류수거함(12)', '의류수거함A084', '경기 구리시 수택동 541-17', 37.6004138888889, 127.146111111111, []],
	// 	['의류수거함(12)', '의류수거함A112', '경기 구리시 수택동 528', 37.6009611111111, 127.144761111111, []],
	// 	['의류수거함(12)', '의류수거함B01-1', '경기 구리시 수택동 528', 37.6004722222222, 127.145408333333, []],
	// 	['의류수거함(12)', '의류수거함B01-2', '경기 구리시 수택동 525-82', 37.6001888888889, 127.143494444444, []],
	// 	['의류수거함(12)', '의류수거함B069', '경기 구리시 수택동 530-42', 37.6008111111111, 127.145133333333, []],
	// 	['의류수거함(12)', '의류수거함B095', '경기 구리시 수택동 528', 37.6013666666667, 127.143861111111, []],
	// ],
	// 전신주: [['쓰레기무단투기(2)', '쓰레기무단투기x01', '경기 구리시 수택동 528', 37.600825, 127.144919444444, ['전신주에 고정', '쓰레기 투기 녹화 CCTV']]],
	// 주차등: [
	// 	['주차등(21)', '주차등x01', '경기 구리시 수택동 541', 37.6004611111111, 127.145827777778, []],
	// 	['주차등(21)', '주차등x02', '경기 구리시 수택동 541', 37.6004944444444, 127.145866666667, []],
	// 	['주차등(21)', '주차등x03', '경기 구리시 수택동 528', 37.6000333333333, 127.146111111111, []],
	// 	['주차등(21)', '주차등x04', '경기 구리시 수택동 528', 37.5999, 127.146544444444, []],
	// 	['주차등(21)', '주차등x05', '경기 구리시 수택동 528', 37.5996805555556, 127.146697222222, []],
	// 	['주차등(21)', '주차등x06', '경기 구리시 수택동 542', 37.5998944444444, 127.146758333333, []],
	// 	['주차등(21)', '주차등x07', '경기 구리시 수택동 530', 37.5999027777778, 127.146636111111, []],
	// 	['주차등(21)', '주차등x08', '경기 구리시 수택동 528', 37.5998638888889, 127.146308333333, []],
	// 	['주차등(21)', '주차등x09', '경기 구리시 수택동 537', 37.6009111111111, 127.145180555556, []],
	// 	['주차등(21)', '주차등x10', '경기 구리시 수택동 528', 37.6006194444444, 127.145263888889, []],
	// 	['주차등(21)', '주차등x11', '경기 구리시 수택동 536-5', 37.6011083333333, 127.144822222222, []],
	// 	['주차등(21)', '주차등x12', '경기 구리시 수택동 537', 37.60105, 127.144836111111, []],
	// 	['주차등(21)', '주차등x13', '경기 구리시 수택동 530-42', 37.6012083333333, 127.144469444444, []],
	// 	['주차등(21)', '주차등x14', '경기 구리시 수택동 532-13', 37.6013638888889, 127.144608333333, []],
	// 	['주차등(21)', '주차등x15', '경기 구리시 수택동 528', 37.6013666666667, 127.143997222222, []],
	// 	['주차등(21)', '주차등x16', '경기 구리시 수택동 360', 37.6017305555556, 127.143044444444, []],
	// 	['주차등(21)', '주차등x17', '경기 구리시 수택동 531', 37.6016694444444, 127.143141666667, []],
	// 	['주차등(21)', '주차등x18', '경기 구리시 수택동 400-8', 37.6015972222222, 127.142441666667, []],
	// 	['주차등(21)', '주차등x19', '경기 구리시 수택동 360', 37.6015138888889, 127.142608333333, []],
	// 	['주차등(21)', '주차등x20', '경기 구리시 수택동 530', 37.6015638888889, 127.143372222222, []],
	// 	['주차등(21)', '주차등x21', '경기 구리시 수택동 360', 37.6015916666667, 127.142783333333, []],
	// ],
	// 통신주: [['쓰레기무단투기(2)', '쓰레기무단투기x01', '경기 구리시 수택동 528', 37.600825, 127.144919444444, ['전신주에 고정', '쓰레기 투기 녹화 CCTV']]],
	// 표지판: [
	// 	['표지판(3)', '교통표지판x01', '경기 구리시 수택동 400-8', 37.6017194444444, 127.1428, ['대형 전광판']],
	// 	['표지판(3)', '교통표지판x02', '경기 구리시 수택동 490-1', 37.5983166666667, 127.143044444444, []],
	// 	['표지판(3)', '교통표지판x03', '경기 구리시 수택동 526', 37.6007694444444, 127.141633333333, []],
	// ],
	// 쓰레기무단투기: [
	// 	['쓰레기무단투기(2)', '쓰레기무단투기x01', '경기 구리시 수택동 528', 37.600825, 127.144919444444, ['전신주에 고정', '쓰레기 투기 녹화 CCTV']],
	// 	['쓰레기무단투기(2)', '쓰레기무단투기x02', '경기 구리시 수택동 530', 37.6013444444444, 127.144158333333, ['이동 감지 센서', '투기 금지 음성 방송']],
	// ],
	// 'CCTV-SOS': [
	// 	['CCTV-SOS(11)', 'CCTV-A-수-001-SOS', '경기 구리시 수택동 523', 37.5993, 127.143263888889, []],
	// 	['CCTV-SOS(11)', 'CCTV-A-수-002-SOS', '경기 구리시 수택동 532-11', 37.6011, 127.144752777778, []],
	// 	['CCTV-SOS(11)', 'CCTV-A-수-005-SOS', '경기 구리시 수택동 521-12', 37.6003277777778, 127.144286111111, []],
	// 	['CCTV-SOS(11)', 'CCTV-A-수-010-SOS', '경기 구리시 수택동 517-18', 37.5991944444444, 127.144866666667, []],
	// 	['CCTV-SOS(11)', 'CCTV-A-수-013-SOS', '경기 구리시 수택동 520', 37.600825, 127.143127777778, []],
	// 	['CCTV-SOS(11)', 'CCTV-A-수-025-SOS', '경기 구리시 수택동 539-19', 37.6008, 127.1456, []],
	// 	['CCTV-SOS(11)', 'CCTV-A-수-029-SOS', '경기 구리시 수택동 526-2', 37.6008805555556, 127.142433333333, []],
	// 	['CCTV-SOS(11)', 'CCTV-A-수-031-SOS', '경기 구리시 수택동 514', 37.5988083333333, 127.145705555556, []],
	// 	['CCTV-SOS(11)', 'CCTV-A-수-032-SOS', '경기 구리시 수택동 523', 37.6001583333333, 127.142508333333, []],
	// 	['CCTV-SOS(11)', 'CCTV-A-수-033-SOS', '경기 구리시 수택동 523', 37.6000777777778, 127.143861111111, []],
	// 	['CCTV-SOS(11)', 'CCTV-A-수-034-SOS', '경기 구리시 수택동 522-61', 37.5992083333333, 127.144041666667, []],
	// ],
	// 'CCTV-벨': [
	// 	['CCTV-벨(6)', 'CCTV-A-수-022', '경기 구리시 수택동 490-1', 37.5979166666667, 127.143386111111, []],
	// 	['CCTV-벨(6)', 'CCTV-A-수-039', '경기 구리시 수택동 515-55', 37.5982944444444, 127.1436, []],
	// 	['CCTV-벨(6)', 'CCTV-A-수-043', '경기 구리시 수택동 528', 37.5995416666667, 127.146958333333, []],
	// 	['CCTV-벨(6)', 'CCTV-A-수-045', '경기 구리시 수택동 525-24', 37.5997194444444, 127.142486111111, []],
	// 	['CCTV-벨(6)', 'CCTV-A-수-047', '경기 구리시 수택동 518-13', 37.599675, 127.145202777778, []],
	// 	['CCTV-벨(6)', 'CCTV-A-수-049', '경기 구리시 수택동 537', 37.600975, 127.144919444444, []],
	// ],
	// 'CCTV-멀티': [
	// 	['CCTV-멀티(9)', 'CCTV-A-수-005-멀티1', '경기 구리시 수택동 521-39', 37.6002416666667, 127.144988888889, []],
	// 	['CCTV-멀티(9)', 'CCTV-A-수-005-멀티2', '경기 구리시 수택동 521-23', 37.60035, 127.1447, []],
	// 	['CCTV-멀티(9)', 'CCTV-A-수-010-멀티', '경기 구리시 수택동 517', 37.5991527777778, 127.144722222222, []],
	// 	['CCTV-멀티(9)', 'CCTV-A-수-013-멀티', '경기 구리시 수택동 527-13', 37.6006888888889, 127.143463888889, []],
	// 	['CCTV-멀티(9)', 'CCTV-A-수-032-멀티', '경기 구리시 수택동 525-90', 37.5999611111111, 127.142777777778, []],
	// 	['CCTV-멀티(9)', 'CCTV-A-수-033-멀티', '경기 구리시 수택동 525-90', 37.6000555555556, 127.143302777778, []],
	// 	['CCTV-멀티(9)', 'CCTV-A-수-034-멀티1', '경기 구리시 수택동 523', 37.5987777777778, 127.143966666667, []],
	// 	['CCTV-멀티(9)', 'CCTV-A-수-034-멀티2', '경기 구리시 수택동 522-42', 37.5994611111111, 127.143927777778, []],
	// 	['CCTV-멀티(9)', 'CCTV-A-수-034-멀티3', '경기 구리시 수택동 522-21', 37.599475, 127.143791666667, []],
	],
};

const category = [
	'가로등',
	'고보조명',
	'공원등',
	'반사경',
	'보안등',
	'신호등',
	'아파트등',
	'의류수거함',
	'전신주',
	'주차등',
	'통신주',
	'표지판',
	'쓰레기무단투기',
	'CCTV-SOS',
	'CCTV-벨',
	'CCTV-멀티',
];

let article_title;
let article_content;

for (let ci = 0; ci < category.length; ci++) {
	const item = items[category[ci]];

	let title = $('#title' + (ci + 1));
	let main = $('#main' + (ci + 1));

	article_title  = `<div class="w3-container w3-indigo" style="margin:300px 0 100px 0;height:300px;">`;
	article_title += `	<h1>시설물 관리대장</h1>`;
	article_title += `	<h2 style="text-align:center; font-size:90px;"><b>` + item[0][0].replace(/\(.*\)/gi, '') + `</b></h2>`;
	article_title += `	<p class="txt-right">총 시설 수량 : ` + item.length + `개소</p>`;
	article_title += `</div>`;
	article_title += `<div class="page"></div>`;
	title.append(article_title);

	

	for (let i = 0; i < item.length; i++) {
		const element = item[i];
		
		article_content  = `<div class="w3-container w3-green" style="margin-top: 20px;">`;
		article_content += `	<h1>시설물 관리대장 > <b>` + element[0].replace(/\(.*\)/gi, '') + `</b></h1>`;
		article_content += `	<p class="txt-right">` + (i + 1) + ` / ` + item.length + `</p> `;
		article_content += `</div>`;
		article_content += `<div class="w3-container w3-margin-top">`;
		article_content += `	<div class="w3-half">`;
		article_content += `		<div class="w3-container w3-card w3-white w3-margin-bottom">`;
		article_content += `			<h3>` + element[1] + `</h3>`;
		article_content += `			<p>- 주소 : ` + element[2] + `</p>`;
		article_content += `			<p>- 위도 : ` + element[3] + `</p>`;
		article_content += `			<p>- 경도 : ` + element[4] + `</p>`;
		article_content += `		</div>`;
		article_content += `		<div class="w3-container w3-card w3-white w3-margin-bottom">`;
		article_content += `			<h3>비고</h3>`;
		article_content += `			<p>` + (element[5][0] == undefined ? '' : '- ' + element[5][0]) + `</p>`;
		article_content += `			<p>` + (element[5][1] == undefined ? '' : '- ' + element[5][1]) + `</p>`;
		article_content += `			<p>` + (element[5][2] == undefined ? '' : '- ' + element[5][2]) + `</p>`;
		article_content += `			<p>` + (element[5][3] == undefined ? '' : '- ' + element[5][3]) + `</p>`;
		article_content += `		</div>`;
		article_content += `	</div>`;
		article_content += `	<div class="w3-half" style="width: 466px;">`;
		article_content += `		<div class="w3-container w3-card w3-white w3-margin-bottom" style="height: 600px; margin-left: 20px;">`;
		article_content += `			<img src="./images/` + element[0] + `/` + element[1] + `.jpeg" class="sisul" />`;
		article_content += `		</div>`;
		article_content += `	</div>`;
		article_content += `</div>`;
		article_content += `<div class="page"></div>`;

		main.append(article_content);
	}
}
