import { HorzScaleOptions } from '../../model/time-scale';

export const timeScaleOptionsDefaults: HorzScaleOptions = {
	rightOffset: 0,
	barSpacing: 6,
	minBarSpacing: 0.5,
	maxBarSpacing: 0,
	fixLeftEdge: false,
	fixRightEdge: false,
	lockVisibleTimeRangeOnResize: false,
	rightBarStaysOnScroll: false,
	borderVisible: true,
	borderColor: '#2B2B43',
	visible: true,
	timeVisible: true,
	secondsVisible: true,
	shiftVisibleRangeOnNewBar: true,
	allowShiftVisibleRangeOnWhitespaceReplacement: false,
	ticksVisible: true,
	uniformDistribution: false,
	minimumHeight: 0,
	allowBoldLabels: true,
	ignoreWhitespaceIndices: false,
};
