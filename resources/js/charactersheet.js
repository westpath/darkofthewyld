function getValues() {
    document.getElementById('totalLiturgies').innerHTML = (parseInt(document.getElementById('presenceValue').value)) + (parseInt(document.getElementById('liturgiesBonus').value));
    document.getElementById('totalConfidence').innerHTML = (parseInt(document.getElementById('presenceValue').value)) + (parseInt(document.getElementById('confidenceBonus').value));
    document.getElementById('totalUnderstand').innerHTML = (parseInt(document.getElementById('presenceValue').value)) + (parseInt(document.getElementById('understandBonus').value));
    document.getElementById('totalCharm').innerHTML = (parseInt(document.getElementById('presenceValue').value)) + (parseInt(document.getElementById('charmBonus').value));
    document.getElementById('totalPerform').innerHTML = (parseInt(document.getElementById('presenceValue').value)) + (parseInt(document.getElementById('performBonus').value));
    document.getElementById('totalOccultism').innerHTML = (parseInt(document.getElementById('witsValue').value)) + (parseInt(document.getElementById('occultismBonus').value));
    document.getElementById('totalReason').innerHTML = (parseInt(document.getElementById('witsValue').value)) + (parseInt(document.getElementById('reasonBonus').value));
    document.getElementById('totalLearn').innerHTML = (parseInt(document.getElementById('witsValue').value)) + (parseInt(document.getElementById('learnBonus').value));
    document.getElementById('totalInvestigate').innerHTML = (parseInt(document.getElementById('witsValue').value)) + (parseInt(document.getElementById('investigateBonus').value));
    document.getElementById('totalPractice').innerHTML = (parseInt(document.getElementById('witsValue').value)) + (parseInt(document.getElementById('practiceBonus').value));
    document.getElementById('totalFineWeapons').innerHTML = (parseInt(document.getElementById('agilityValue').value)) + (parseInt(document.getElementById('fineWeaponsBonus').value));
    document.getElementById('totalDualWeapons').innerHTML = (parseInt(document.getElementById('agilityValue').value)) + (parseInt(document.getElementById('dualWeaponsBonus').value));
    document.getElementById('totalEvade').innerHTML = (parseInt(document.getElementById('agilityValue').value)) + (parseInt(document.getElementById('evadeBonus').value));
    document.getElementById('totalAmbush').innerHTML = (parseInt(document.getElementById('agilityValue').value)) + (parseInt(document.getElementById('ambushBonus').value));
    document.getElementById('totalFinesse').innerHTML = (parseInt(document.getElementById('agilityValue').value)) + (parseInt(document.getElementById('finesseBonus').value));
    document.getElementById('totalPilot').innerHTML = (parseInt(document.getElementById('agilityValue').value)) + (parseInt(document.getElementById('pilotBonus').value));
    document.getElementById('totalGreatWeapons').innerHTML = (parseInt(document.getElementById('vigorValue').value)) + (parseInt(document.getElementById('greatWeaponsBonus').value));
    document.getElementById('totalVersatileWeapons').innerHTML = (parseInt(document.getElementById('vigorValue').value)) + (parseInt(document.getElementById('versatileWeaponsBonus').value));
    document.getElementById('totalBlock').innerHTML = (parseInt(document.getElementById('vigorValue').value)) + (parseInt(document.getElementById('blockBonus').value));
    document.getElementById('totalWatch').innerHTML = (parseInt(document.getElementById('vigorValue').value)) + (parseInt(document.getElementById('watchBonus').value));
    document.getElementById('totalEndure').innerHTML = (parseInt(document.getElementById('vigorValue').value)) + (parseInt(document.getElementById('endureBonus').value));
    document.getElementById('totalExert').innerHTML = (parseInt(document.getElementById('vigorValue').value)) + (parseInt(document.getElementById('exertBonus').value));
}