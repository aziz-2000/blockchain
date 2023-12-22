<img width="1258" alt="‏لقطة الشاشة ٢٠٢٣-١٢-٢١ في ٥ ٣٤ ٠٩ ص" src="https://github.com/aziz-2000/blockchain/assets/105892837/41fbe060-3791-4d60-b63b-015e4f238c6b">

<strong> ❗️ Problems encountered:<strong><br>
<small>✅ New versions of smart contract libraries (We used older versions to account for backward compatibility and potential changes in functionality).</small><br>
✅ Test networks in Metamask.<br>
✅ Charging an account from faucet in fictitious currency.<br>
✅ Error in writing codes sometimes.<br>
✅ New concepts and terminology. <br>
✅ Execute the Assignment at the required time.<br>


🌐 Click this link to visit the project website: http://13.51.235.131/


<button onclick="copyCommand()">Copy Command</button>
 <style>
        .code-container {
            position: relative;
        }

        .copy-button {
            position: absolute;
            top: 5px;
            right: 5px;
            cursor: pointer;
            padding: 5px 10px;
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 4px;
        }
    </style>
</head>
<body>

<!-- Your blog content goes here -->

<!-- Include the necessary JavaScript for the copy button -->
<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Get all code blocks
        var codeBlocks = document.querySelectorAll('pre code');

        // Add copy buttons to each code block
        codeBlocks.forEach(function (codeBlock) {
            var button = document.createElement('button');
            button.className = 'copy-button';
            button.textContent = 'Copy';

            button.addEventListener('click', function () {
                copyToClipboard(codeBlock.textContent);
            });

            var codeContainer = codeBlock.parentElement;
            codeContainer.classList.add('code-container');
            codeContainer.appendChild(button);
        });

        // Function to copy text to clipboard
        function copyToClipboard(text) {
            var textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);

            textarea.select();
            document.execCommand('copy');

            document.body.removeChild(textarea);

            alert('Code copied to clipboard!');
        }
    });
</script>
