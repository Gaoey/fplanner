$(document).ready(() => {
    // initialize
    var count = 0
    var score = 0
    var age = 0
    var money = 0
    var goalTime = 0
    var currentScore = 1
    var riskQuestion = [
        {
            "question": "ปัจจุบันท่านมีภาระค่าใช้จ่ายรายเดือน รวมเป็นสัดส่วนเท่าใดของรายได้ต่อเดือน",
            "1": "มากกว่า 80%",
            "2": "มากกว่า 50% ถึง80%",
            "3": "มากกว่า 20% ถึง 50% ",
            "4": "ไม่เกิน 20% "
        },
        {
            "question": "หากท่านออกจากงานวันนี้เงินออมที่ท่านมีอยู่จะรองรับค่าใช้จ่ายได้นานแค่ไหน",
            "1": "น้อยกว่า 3 เดือน",
            "2": "3 เดือน ถึง 1 ปี",
            "3": "มากกว่า 1 ปีถึง 3 ปี",
            "4": "มากกว่า 3 ปี"
        },
        {
            "question": "จำนวนเงินกองทุนสำรองเลี้ยงชีพ ณ ปัจจุบัน คิดเป็นสัดส่วนเท่าใดของทรัพย์สินทั้งสิ้นของท่าน",
            "1": "มากกว่า 75% ",
            "2": "มากกว่า 50% ถึง75%",
            "3": "มากกว่า 25% ถึง50%",
            "4": "ไม่เกิน 25%"
        },
        {
            "question": "หากท่านต้องเข้ารักษาตัวในโรงพยาบาลหลังจากเกษียณอายุ แล้วท่านจะหาเงินค่ารักษาพยาบาลจากไหน",
            "1": "เงินออมของตนเอง",
            "2": "ให้ครอบครัวร่วมรับผิดชอบ ",
            "3": "สวัสดิการต่างๆ",
            "4": "ประกัน สุขภาพ"
        },
        {
            "question": "ท่านรู้จักการลงทุนอะไรบ้าง",
            "1": "เงินฝาก",
            "2": "เงินฝาก พันธบัตร หุ้นกู้  ",
            "3": "เงินฝาก พันธบัตร หุ้นกู้กองทุนรวม หุ้นสามัญ ",
            "4": "เงินฝาก พันธบตัร หุ้นกู้กองทุนรวม หุ้นสามัญกองทุนรวมทองคำ กองทุนรวมอสังหาริมทรัพย์และอื่นๆ "
        },
        {
            "question": "ท่านมีประสบการณ์การลงทุน อะไรบ้าง",
            "1": "เงินฝาก ",
            "2": "เงินฝาก พันธบัตร หุ้นกู้  ",
            "3": "เงินฝาก พันธบัตร หุ้นกู้กองทุนรวม หุ้นสามัญ ",
            "4": "เงินฝาก พันธบตัร หุ้นกู้กองทุนรวม หุ้นสามัญกองทุนรวมทองคำ กองทุนรวมอสังหาริมทรัพย์และอื่นๆ "
        },
        {
            "question": "ทัศนคติในการลงทุนของท่าน",
            "1": "ไม่สามารถทนต่อการขาดทุนเงินต้นได้เลย",
            "2": "สามารถทนต่อการขาดทุนเงินต้นได้บ้างเพื่อมีโอกาสได้รับผลตอบแทนที่สูงข้ึน   ",
            "3": "สามารถทนต่อการขาดทุนเงินต้นได้มาก เพื่อมีโอกาสได้รับผลตอบแทนสูง ",
            "4": "อยากได้ผลตอบแทนสูงสุด โดยไม่มีข้อจำกัดในการลงทุน "
        },
        {
            "question": "เป้าหมายการลงทุนของท่านเป็นอย่างไร",
            "1": "เงินต้นต้องปลอดภัยแม้ว่า จะได้รับผลตอบแทนตำ่ กว่าอัตราเงินเฟ้อ",
            "2": "ต้องการผลตอบแทนสูงกว่าอัตราเงินเฟ้อโดยสามารถรับความผันผวนของมูลค่าเงินกองทุนไดบ้าง ",
            "3": "ต้องการผลตอบแทนสูงกว่าอัตราเงินเฟ้อมากโดยสามารถรับความผันผวนของมูลค่าเงินกองทุนได้มาก",
            "4": "ต้องการผลตอบแทนสูงกว่าอัตราเงินเฟ้อมากที่สุดโดยสามารถรับความผันผวนของมูลค่าเงินกองทุนได้เต็มที่"
        },
        {
            "question": "ท่านคาดหวังผลตอบแทนจากการลงทุนในกองทุนสำรองเลี้ยงชีพในระดับใดต่อปี",
            "1": "ประมาณ 2% ถึง3% อย่างสม่าเสมอ",
            "2": "มีโอกาสได้รับผลตอบแทนถึง 5% แต่บางปีอาจไม่มีผลตอบแทนเลย",
            "3": "มีโอกาสได้รับผลตอบแทนถึง 8% แต่บางปีอาจขาดทุนได้ถึง 3% ",
            "4": "มีโอกาสได้รับผลตอบแทนถึง 25%  แต่บางปีอาจขาดทุนได้ถึง 15%"
        }
    ]

    function selectTimeAsset(time) {
        if (time <= 2) {
            return {
                'moneyMarket': 20,
                'bond': 70,
                'equity': 0,
                'alternative': 10
            }
        } else if (time >= 3 && time < 5) {
            return {
                'moneyMarket': 0,
                'bond': 50,
                'equity': 40,
                'alternative': 10
            }
        } else if (time >= 5 && time <= 7) {
            return {
                'moneyMarket': 0,
                'bond': 40,
                'equity': 50,
                'alternative': 10
            }
        } else if (time > 7) {
            return {
                'moneyMarket': 0,
                'bond': 30,
                'equity': 60,
                'alternative': 10
            }
        }
    }
    function selectRiskAsset(score) {
        if (score < 14) {
            return {
                'moneyMarket': 80,
                'bond': 20,
                'equity': 0,
                'alternative': 0
            }
        } else if (score <= 19 && score >= 14) {
            return {
                'moneyMarket': 0,
                'bond': 75,
                'equity': 20,
                'alternative': 5
            }
        } else if (score >= 20 && score <= 25) {
            return {
                'moneyMarket': 0,
                'bond': 50,
                'equity': 40,
                'alternative': 10
            }
        } else if (score >= 26 && score <= 31) {
            return {
                'moneyMarket': 0,
                'bond': 40,
                'equity': 50,
                'alternative': 10
            }
        } else if (score >= 32) {
            return {
                'moneyMarket': 0,
                'bond': 30,
                'equity': 60,
                'alternative': 10
            }
        }
    }
    // method
    function showLabel(AssetAllocation) {
        $('#money-market-input').html(`Money Market : ${AssetAllocation.moneyMarket}%`).css('color', 'rgb(255, 99, 132)')
        $('#bond-input').html(`Bond : ${AssetAllocation.bond}%`).css('color', 'rgb(0, 153, 76)')
        $('#equity-input').html(`Equity : ${AssetAllocation.equity}%`).css('color', 'rgb(255, 153, 51)')
        $('#alternative-input').html(`Alternative : ${AssetAllocation.alternative}%`).css('color', 'rgb(0, 128, 255)')
    }


    function chart(AssetAllocation) {
        var ctx = document.getElementById('chart-show').getContext('2d');
        return new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: ["Money Market", "Bond", "Equity", "Alternative"],
                datasets: [{
                    label: "Asset Allocation",
                    backgroundColor: ['rgb(255, 99, 132)', 'rgb(0, 153, 76)', 'rgb(255, 153, 51)', 'rgb(0, 128, 255)'],
                    borderColor: 'rgb(255, 99, 132)',
                    data: [
                        AssetAllocation.moneyMarket,
                        AssetAllocation.bond,
                        AssetAllocation.equity,
                        AssetAllocation.alternative
                    ],
                }]
            },
        })
    }

    function insertChoiceData(data) {
        $('#question').html(data["question"])
        $('.one-choice').html(data["1"])
        $('.two-choice').html(data["2"])
        $('.three-choice').html(data["3"])
        $('.four-choice').html(data["4"])
    }

    $('#sendMessageButtonCustomerDetail').click((e) => {
        age = $('#age').val()
        money = $('#money').val()
        goalTime = $('#goal-time').val()

        $('#customer-info').addClass('mfp-hide')
        $('#risk-management').removeClass('mfp-hide')

        insertChoiceData(riskQuestion[count++])
    })

    $('#next').click((e) => {
        score += currentScore
        if (count < riskQuestion.length) {
            insertChoiceData(riskQuestion[count++])
        } else {
            var a = selectRiskAsset(score)
            var b = selectTimeAsset(goalTime)
            var AssetAllocation = {
                'moneyMarket': Math.min(a.moneyMarket, b.moneyMarket),
                'bond': Math.min(a.bond, b.bond),
                'equity': Math.min(a.equity, b.equity),
                'alternative': Math.min(a.alternative, b.alternative),
            }
            // showing chart results
            $('#risk-management').addClass('mfp-hide')
            $('#chart').removeClass('mfp-hide')
            $('#funding').removeClass('mfp-hide')
            chart(AssetAllocation)
            showLabel(AssetAllocation)
        }
    })

    $('.nextToInvestmentTab').click(() => {
        alert('This feature will coming soon....')
    })

    $('#radio-one-choice').click(() => {
        currentScore = 1
    })
    $('#radio-two-choice').click(() => {
        currentScore = 2
    })
    $('#radio-three-choice').click(() => {
        currentScore = 3
    })
    $('#radio-four-choice').click(() => {
        currentScore = 4
    })
})