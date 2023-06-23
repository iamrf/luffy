const OnionPattern = (props) => {
    return ( 
        <svg className={props.className && props.className} width="758" height="716" viewBox="0 0 758 716" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M890.11 -484.392C834.946 -450.435 765.363 -402.295 730.852 -333.834C720.8 -313.895 713.724 -292.233 710.845 -268.697C710.554 -268.133 710.266 -267.567 709.98 -267.001C701.854 -250.879 695.672 -233.632 692.081 -215.178C690.016 -211.592 688.046 -207.947 686.178 -204.243C680.755 -193.484 676.198 -182.224 672.699 -170.439C667.662 -162.833 663.041 -154.948 658.92 -146.774C657.875 -144.7 656.861 -142.607 655.882 -140.496C603.176 -107.102 541.414 -61.2146 509.55 1.99419C492.291 36.2317 483.804 75.5503 490.275 120.71C496.746 165.868 518.172 216.848 560.708 274.416C659.777 408.493 771.688 448.857 857.907 479.955C865.912 482.842 873.696 485.649 881.227 488.444C925.564 504.899 961.086 520.906 981.653 550.207C1002.21 579.495 1007.87 622.142 992.261 691.991L992.827 692.134C1008.45 622.235 1002.82 579.393 982.126 549.904C961.437 520.428 925.732 504.368 881.412 487.92C873.879 485.124 866.094 482.316 858.09 479.429C771.882 448.335 660.129 408.027 561.172 274.101C518.679 216.591 497.302 165.699 490.848 120.657C484.394 75.6177 492.857 36.4091 510.072 2.25947C541.712 -60.5062 602.918 -106.186 655.436 -139.528C655.201 -139.017 654.969 -138.504 654.739 -137.99C651.936 -134.451 649.219 -130.846 646.596 -127.174C609.649 -98.7395 574.304 -63.8484 552.702 -20.9957C535.443 13.2418 526.956 52.5604 533.427 97.7206C539.898 142.878 561.324 193.858 603.86 251.426C702.929 385.504 814.84 425.868 901.059 456.965C909.064 459.852 916.848 462.659 924.379 465.454C968.716 481.909 1004.24 497.916 1024.81 527.217C1045.36 556.505 1051.02 599.152 1035.41 669.001L1035.98 669.144C1051.6 599.245 1045.98 556.403 1025.28 526.914C1004.59 497.438 968.884 481.379 924.564 464.93C917.031 462.134 909.247 459.327 901.242 456.439C815.034 425.345 703.281 385.037 604.324 251.111C561.831 193.601 540.455 142.71 534 97.6673C527.546 52.6278 536.009 13.4193 553.224 -20.7304C574.485 -62.9058 609.095 -97.3665 645.448 -125.553C644.811 -124.646 644.179 -123.736 643.554 -122.82C623.249 -102.473 605.275 -79.57 592.277 -53.7849C575.018 -19.5474 566.53 19.7712 573.002 64.9314C579.473 110.089 600.898 161.069 643.435 218.636C742.504 352.714 854.415 393.078 940.634 424.176C948.639 427.063 956.422 429.87 963.954 432.665C1008.29 449.12 1043.81 465.127 1064.38 494.428C1084.94 523.716 1090.6 566.363 1074.99 636.212L1075.55 636.355C1091.17 566.456 1085.55 523.614 1064.85 494.125C1044.16 464.649 1008.46 448.589 964.139 432.141C956.606 429.345 948.821 426.537 940.817 423.65C854.609 392.556 742.856 352.247 643.899 218.322C601.406 160.812 580.029 109.92 573.575 64.8781C567.121 19.8386 575.583 -19.3699 592.799 -53.5196C605.302 -78.3222 622.422 -100.457 641.798 -120.216C636.644 -112.471 631.921 -104.435 627.718 -96.0972C610.459 -61.8597 601.971 -22.5411 608.443 22.6191C614.914 67.7765 636.339 118.757 678.875 176.324C777.945 310.402 889.856 350.766 976.075 381.863C984.08 384.751 991.863 387.558 999.395 390.353C1043.73 406.808 1079.25 422.814 1099.82 452.116C1120.38 481.404 1126.04 524.051 1110.43 593.9L1110.99 594.042C1126.62 524.144 1120.99 481.302 1100.29 451.813C1079.6 422.337 1043.9 406.277 999.58 389.829C992.046 387.033 984.262 384.225 976.258 381.338C890.05 350.244 778.297 309.935 679.34 176.009C636.847 118.5 615.47 67.608 609.016 22.5658C602.561 -22.4737 611.024 -61.6822 628.239 -95.8319C632.897 -105.071 638.195 -113.941 644.012 -122.455C646.348 -124.795 648.714 -127.1 651.107 -129.373C639.263 -99.3762 634.244 -65.7517 639.645 -28.0575C646.116 17.0999 667.542 68.0801 710.078 125.648C809.147 259.726 921.058 300.089 1007.28 331.187C1015.28 334.074 1023.07 336.881 1030.6 339.676C1074.93 356.131 1110.46 372.138 1131.02 401.439C1151.58 430.727 1157.24 473.374 1141.63 543.223L1142.2 543.366C1157.82 473.467 1152.19 430.625 1131.5 401.136C1110.81 371.66 1075.1 355.6 1030.78 339.152C1023.25 336.356 1015.46 333.549 1007.46 330.661C921.252 299.567 809.499 259.259 710.542 125.333C668.049 67.8233 646.673 16.9314 640.218 -28.1108C634.76 -66.1975 639.969 -100.115 652.118 -130.329C652.668 -130.847 653.219 -131.364 653.772 -131.879C657.982 -135.017 662.204 -138.073 666.42 -141.05C664.104 -123.599 664.097 -105.112 666.903 -85.5264C673.375 -40.3691 694.8 10.6112 737.336 68.1786C836.405 202.257 948.316 242.621 1034.54 273.718C1042.54 276.605 1050.32 279.412 1057.86 282.207C1102.19 298.662 1137.71 314.669 1158.28 343.97C1178.84 373.258 1184.5 415.905 1168.89 485.754L1169.46 485.897C1185.08 415.998 1179.45 373.156 1158.75 343.667C1138.07 314.191 1102.36 298.131 1058.04 281.683C1050.51 278.89 1042.74 276.085 1034.74 273.2L1034.72 273.192C948.51 242.098 836.757 201.79 737.801 67.8639C695.307 10.3543 673.931 -40.5375 667.476 -85.5798C664.647 -105.321 664.684 -123.941 667.067 -141.507C674.655 -146.85 682.219 -151.936 689.656 -156.778C689.947 -153.97 690.296 -151.139 690.705 -148.284C697.176 -103.127 718.602 -52.1467 761.138 5.42065C860.207 139.499 972.118 179.863 1058.34 210.96C1066.34 213.847 1074.13 216.654 1081.66 219.45C1125.99 235.904 1161.52 251.911 1182.08 281.212C1202.64 310.501 1208.3 353.147 1192.69 422.996L1193.26 423.139C1208.88 353.24 1203.25 310.398 1182.56 280.909C1161.87 251.433 1126.16 235.374 1081.84 218.925C1074.31 216.129 1066.52 213.322 1058.52 210.435C972.312 179.34 860.559 139.032 761.603 5.10598C719.109 -52.4036 697.733 -103.295 691.278 -148.338C690.855 -151.294 690.495 -154.224 690.198 -157.13C697.729 -162.025 705.128 -166.668 712.285 -171.074L711.96 -171.553C704.887 -167.199 697.576 -162.612 690.133 -157.778C689.994 -159.182 689.87 -160.581 689.759 -161.973C699.367 -169.253 709.06 -176.102 718.627 -182.547C729.195 -145.811 749.398 -105.548 782.009 -61.4132C881.078 72.6648 992.989 113.029 1079.21 144.126C1087.21 147.013 1095 149.821 1102.53 152.616C1146.87 169.071 1182.39 185.077 1202.95 214.378C1223.51 243.667 1229.17 286.313 1213.56 356.163L1214.13 356.305C1229.75 286.407 1224.13 243.565 1203.43 214.076C1182.74 184.599 1147.03 168.54 1102.71 152.091C1095.18 149.296 1087.4 146.488 1079.39 143.601C993.184 112.506 881.43 72.1978 782.474 -61.7278C749.835 -105.901 729.654 -146.17 719.124 -182.882C730.328 -190.416 741.353 -197.396 751.86 -203.864L751.535 -204.343C741.081 -197.908 730.11 -190.963 718.957 -183.468C717.679 -187.964 716.545 -192.408 715.551 -196.798C739.603 -215.919 764.656 -232.237 787.301 -246.176L786.976 -246.655C764.405 -232.761 739.419 -216.492 715.41 -197.428C714.065 -203.441 712.983 -209.355 712.149 -215.171C712.075 -215.688 712.003 -216.203 711.933 -216.717C745.211 -249.724 784.563 -275.96 818.503 -296.852L818.178 -297.331C784.349 -276.507 745.097 -250.349 711.836 -217.441C710.765 -225.509 710.173 -233.389 710.025 -241.085C747.25 -290.208 801.176 -326.876 845.761 -354.321L845.437 -354.8C801.033 -327.467 747.286 -290.943 710.009 -242.03C709.877 -251.111 710.363 -259.936 711.408 -268.512C746.146 -335.884 814.88 -383.418 869.563 -417.079L869.239 -417.558C814.935 -384.131 746.657 -336.958 711.619 -270.186C714.609 -293.048 721.573 -314.128 731.373 -333.569C765.811 -401.883 835.272 -449.957 890.434 -483.913L890.11 -484.392ZM656.345 -140.105L656.232 -139.859C656.327 -139.978 656.423 -140.096 656.519 -140.215L656.345 -140.105ZM658.067 -141.193C657.117 -140.032 656.176 -138.863 655.244 -137.687C654.375 -135.748 653.535 -133.793 652.725 -131.822C652.871 -131.931 653.017 -132.04 653.163 -132.15L653.386 -132.316C657.809 -136.437 662.318 -140.447 666.887 -144.349C667.018 -145.219 667.154 -146.087 667.297 -146.952C664.259 -145.075 661.179 -143.156 658.067 -141.193ZM667.423 -147.71C664.725 -146.044 661.994 -144.345 659.235 -142.612C662.219 -146.213 665.288 -149.743 668.433 -153.204C668.071 -151.385 667.734 -149.553 667.423 -147.71ZM668.635 -147.778L669.133 -148.084L668.808 -148.563L668.083 -148.116C668.424 -150.105 668.795 -152.08 669.196 -154.041C675.404 -160.827 681.897 -167.346 688.589 -173.61C688.673 -169.865 688.862 -166.078 689.16 -162.247C681.881 -156.725 674.651 -150.955 667.563 -144.926C667.688 -145.739 667.819 -146.549 667.954 -147.358L668.635 -147.778ZM657.664 -141.623C657.376 -141.441 657.087 -141.259 656.798 -141.076C657.654 -142.901 658.536 -144.712 659.442 -146.508C663.265 -154.094 667.521 -161.429 672.141 -168.524C670.811 -163.87 669.646 -159.135 668.658 -154.317C664.881 -150.185 661.21 -145.955 657.664 -141.623ZM645.833 -125.084C646.23 -125.649 646.628 -126.213 647.029 -126.775C647.885 -127.433 648.741 -128.087 649.597 -128.738C648.335 -127.529 647.08 -126.312 645.833 -125.084ZM648.203 -128.406C649.405 -129.324 650.61 -130.236 651.815 -131.14C652.453 -132.714 653.11 -134.277 653.785 -135.83C651.882 -133.387 650.021 -130.912 648.203 -128.406ZM666.525 -141.834C663.603 -139.774 660.676 -137.676 657.753 -135.539C660.722 -138.232 663.726 -140.876 666.757 -143.473C666.677 -142.928 666.6 -142.381 666.525 -141.834ZM689.59 -157.425C682.212 -152.627 674.707 -147.586 667.176 -142.292C667.258 -142.878 667.342 -143.464 667.43 -144.048C674.575 -150.145 681.869 -155.978 689.214 -161.559C689.326 -160.187 689.451 -158.809 689.59 -157.425ZM718.459 -183.133C717.183 -187.608 716.05 -192.031 715.054 -196.403C706.227 -189.367 697.538 -181.953 689.156 -174.139C689.231 -170.357 689.413 -166.532 689.706 -162.661C699.279 -169.904 708.933 -176.72 718.459 -183.133ZM688.573 -174.392C681.973 -168.231 675.564 -161.823 669.427 -155.156C670.502 -160.259 671.775 -165.268 673.233 -170.186C678.119 -177.56 683.398 -184.671 688.991 -191.529C688.609 -185.92 688.465 -180.208 688.573 -174.392ZM714.912 -197.032C706.133 -190.043 697.488 -182.68 689.142 -174.921C689.048 -180.824 689.215 -186.618 689.627 -192.306C696.475 -200.644 703.787 -208.606 711.423 -216.21C711.473 -215.846 711.524 -215.483 711.577 -215.118C712.426 -209.19 713.533 -203.162 714.912 -197.032ZM711.324 -216.934C710.247 -224.918 709.638 -232.719 709.463 -240.34C703.357 -232.225 697.708 -223.77 692.632 -214.963C691.266 -207.925 690.278 -200.711 689.703 -193.317C696.506 -201.551 703.758 -209.418 711.324 -216.934ZM689.063 -192.539C689.585 -199.661 690.489 -206.617 691.745 -213.41C689.99 -210.309 688.307 -207.165 686.7 -203.977C681.574 -193.809 677.224 -183.193 673.813 -172.107C678.563 -179.157 683.669 -185.964 689.063 -192.539ZM709.443 -241.285C703.495 -233.424 697.974 -225.245 692.985 -216.734C696.609 -234.504 702.644 -251.147 710.502 -266.735L710.648 -267.024C709.701 -258.68 709.282 -250.103 709.443 -241.285ZM463.689 16.0889C498.2 -52.3713 567.784 -100.512 622.947 -134.469L623.272 -133.99C568.109 -100.033 498.648 -51.9599 464.211 16.3542C446.995 50.5038 438.533 89.7124 444.987 134.752C451.441 179.794 472.818 230.686 515.311 288.196C614.268 422.121 726.021 462.43 812.229 493.524L812.25 493.532C820.247 496.416 828.024 499.221 835.551 502.015C879.871 518.463 915.576 534.523 936.265 563.999C956.963 593.488 962.586 636.33 946.966 706.228L946.4 706.086C962.01 636.237 956.349 593.59 935.792 564.302C915.225 535 879.703 518.994 835.366 502.539C827.834 499.744 820.051 496.937 812.046 494.049C725.827 462.952 613.916 422.588 514.847 288.51C472.31 230.943 450.885 179.963 444.414 134.805C437.942 89.645 446.43 50.3263 463.689 16.0889ZM575.259 -127.499C520.096 -93.5422 450.512 -45.4016 416.001 23.0586C398.741 57.2961 390.254 96.6147 396.726 141.775C403.197 186.932 424.622 237.913 467.158 295.48C566.228 429.558 678.139 469.922 764.358 501.019C772.363 503.906 780.146 506.714 787.677 509.509C832.015 525.964 867.537 541.97 888.104 571.271C908.661 600.56 914.322 643.206 898.712 713.056L899.277 713.198C914.898 643.3 909.275 600.458 888.577 570.969C867.887 541.493 832.182 525.433 787.863 508.984C780.329 506.189 772.545 503.381 764.541 500.494C678.333 469.399 566.58 429.091 467.623 295.165C425.129 237.656 403.753 186.764 397.298 141.722C390.844 96.6822 399.307 57.4736 416.522 23.3239C450.96 -44.9901 520.421 -93.0636 575.583 -127.02L575.259 -127.499ZM367.185 24.9655C401.696 -43.4947 471.28 -91.6353 526.443 -125.592L526.768 -125.113C471.605 -91.1567 402.144 -43.0833 367.707 25.2308C350.492 59.3805 342.029 98.589 348.483 143.628C354.937 188.671 376.314 239.562 418.807 297.072C517.764 430.998 629.517 471.306 715.725 502.401C723.729 505.288 731.514 508.095 739.047 510.891C783.367 527.34 819.072 543.399 839.761 572.875C860.459 602.364 866.082 645.206 850.462 715.105L849.896 714.962C865.506 645.113 859.845 602.467 839.288 573.178C818.721 543.877 783.199 527.87 738.862 511.416C731.379 508.638 723.647 505.849 715.696 502.981L715.692 502.98L715.649 502.964L715.642 502.962L715.62 502.954L715.56 502.932L715.542 502.926C629.323 471.829 517.412 431.465 418.343 297.387C375.807 239.819 354.381 188.839 347.91 143.682C341.439 98.5216 349.926 59.2029 367.185 24.9655ZM477.013 -126.831C421.849 -92.8739 352.266 -44.7333 317.755 23.7269C300.495 57.9644 292.008 97.283 298.479 142.443C304.951 187.601 326.376 238.581 368.912 296.148C467.981 430.226 579.892 470.59 666.111 501.687C674.116 504.575 681.9 507.382 689.431 510.177C733.768 526.632 769.291 542.638 789.857 571.94C810.415 601.228 816.075 643.875 800.466 713.724L801.031 713.866C816.652 643.968 811.029 601.126 790.33 571.637C769.641 542.161 733.936 526.101 689.616 509.653C682.09 506.859 674.313 504.054 666.316 501.17L666.294 501.162C580.087 470.068 468.333 429.759 369.377 295.834C326.883 238.324 305.507 187.432 299.052 142.39C292.598 97.3505 301.061 58.1419 318.276 23.9922C352.714 -44.3218 422.175 -92.3953 477.337 -126.352L477.013 -126.831ZM268.039 20.9691C302.55 -47.4911 372.134 -95.6317 427.297 -129.589L427.622 -129.11C372.459 -95.1531 302.998 -47.0796 268.561 21.2344C251.346 55.3841 242.883 94.5926 249.337 139.632C255.791 184.674 277.168 235.566 319.661 293.076C418.618 427.001 530.371 467.31 616.579 498.404C624.583 501.291 632.368 504.099 639.901 506.895C684.221 523.343 719.926 539.403 740.615 568.879C761.313 598.368 766.936 641.21 751.316 711.109L750.75 710.966C766.36 641.117 760.699 598.47 740.142 569.182C719.575 539.881 684.053 523.874 639.716 507.419C632.185 504.624 624.401 501.817 616.396 498.93C530.177 467.832 418.266 427.468 319.197 293.39C276.661 235.823 255.235 184.843 248.764 139.685C242.293 94.5252 250.78 55.2066 268.039 20.9691ZM377.543 -132.603C322.379 -98.6463 252.796 -50.5057 218.284 17.9545C201.025 52.1919 192.538 91.5105 199.009 136.671C205.481 181.828 226.906 232.808 269.442 290.376C368.511 424.454 480.422 464.818 566.641 495.915L566.648 495.917L566.692 495.933C574.679 498.814 582.446 501.615 589.961 504.405C634.298 520.859 669.821 536.866 690.387 566.167C710.945 595.456 716.605 638.102 700.996 707.952L701.561 708.094C717.182 638.195 711.559 595.354 690.86 565.864C670.171 536.388 634.466 520.329 590.146 503.88C582.62 501.087 574.843 498.282 566.846 495.398L566.835 495.393L566.824 495.39C480.617 464.295 368.863 423.987 269.907 290.061C227.413 232.551 206.037 181.66 199.582 136.617C193.128 91.578 201.591 52.3694 218.806 18.2198C253.243 -50.0943 322.705 -98.1678 377.867 -132.124L377.543 -132.603ZM168.646 15.6421C203.157 -52.8181 272.741 -100.959 327.904 -134.916L328.228 -134.437C273.066 -100.48 203.605 -52.4066 169.167 15.9074C151.952 50.0571 143.489 89.2656 149.943 134.305C156.398 179.347 177.774 230.239 220.268 287.749C319.225 421.674 430.978 461.983 517.186 493.077L517.196 493.081L517.208 493.085C525.204 495.97 532.981 498.775 540.507 501.568C584.827 518.016 620.532 534.076 641.222 563.552C661.92 593.041 667.543 635.883 651.922 705.782L651.357 705.639C666.967 635.79 661.306 593.143 640.748 563.855C620.182 534.554 584.66 518.547 540.322 502.092C532.805 499.302 525.037 496.5 517.047 493.619L517.038 493.615L517.004 493.603L517.003 493.603C430.784 462.505 318.873 422.141 219.803 288.063C177.267 230.496 155.842 179.516 149.371 134.358C142.899 89.1982 151.386 49.8796 168.646 15.6421ZM278.531 -135.842C223.368 -101.885 153.784 -53.7443 119.273 14.7159C102.014 48.9533 93.5264 88.2719 99.998 133.432C106.469 178.59 127.894 229.57 170.431 287.137C269.5 421.215 381.411 461.579 467.63 492.676L467.637 492.679L467.665 492.689C475.658 495.572 483.429 498.375 490.95 501.166C535.287 517.621 570.809 533.627 591.376 562.929C611.933 592.217 617.594 634.864 601.984 704.713L602.55 704.855C618.17 634.957 612.547 592.115 591.849 562.626C571.16 533.15 535.455 517.09 491.135 500.642C483.602 497.846 475.817 495.038 467.813 492.151C381.605 461.057 269.852 420.748 170.895 286.822C128.402 229.313 107.025 178.421 100.571 133.379C94.1165 88.3394 102.579 49.1308 119.795 14.9812C154.232 -53.3329 223.693 -101.406 278.856 -135.363L278.531 -135.842ZM70.2707 15.6825C104.782 -52.7777 174.366 -100.918 229.529 -134.875L229.853 -134.396C174.691 -100.44 105.23 -52.3662 70.7922 15.9478C53.5772 50.0975 45.1142 89.3061 51.5684 134.345C58.023 179.388 79.3994 230.28 121.893 287.789C220.85 421.715 332.603 462.023 418.811 493.118C426.815 496.005 434.599 498.812 442.132 501.608C486.452 518.057 522.157 534.116 542.847 563.593C563.545 593.082 569.168 635.924 553.547 705.822L552.982 705.68C568.592 635.83 562.931 593.184 542.374 563.895C521.807 534.594 486.285 518.588 441.947 502.133C434.416 499.338 426.633 496.53 418.628 493.643C332.409 462.546 220.498 422.182 121.428 288.104C78.8921 230.536 57.4668 179.556 50.9957 134.399C44.5242 89.2386 53.0114 49.92 70.2707 15.6825ZM180.983 -131.696C125.82 -97.7388 56.2362 -49.5982 21.725 18.8621C4.46572 53.0995 -4.02154 92.4181 2.44998 137.578C8.92109 182.736 30.3464 233.716 72.8825 291.283C171.952 425.361 283.863 465.725 370.082 496.823L370.118 496.835C378.11 499.718 385.882 502.521 393.402 505.312C437.739 521.767 473.261 537.774 493.828 567.075C514.385 596.363 520.046 639.01 504.436 708.859L505.002 709.001C520.622 639.103 514.999 596.261 494.301 566.772C473.612 537.296 437.907 521.236 393.587 504.788C386.066 501.997 378.295 499.194 370.304 496.311L370.265 496.297C284.057 465.203 172.304 424.894 73.3471 290.969C30.8537 233.459 9.47734 182.567 3.02273 137.525C-3.43148 92.4856 5.03151 53.277 22.2465 19.1273C56.684 -49.1867 126.145 -97.2602 181.308 -131.217L180.983 -131.696Z" fill="url(#paint0_radial_601_860)" fillOpacity="0.18"/>
            <defs>
            <radialGradient id="paint0_radial_601_860" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(527.193 192.385) rotate(60.6237) scale(605.292 573.829)">
            <stop stopColor="white"/>
            <stop offset="1" stopColor="#1E1E1E" stopOpacity="0"/>
            <stop offset="1" stopColor="#0E0E35" stopOpacity="0"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
            </radialGradient>
            </defs>
        </svg>
     );
}
 
export default OnionPattern;