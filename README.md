## Setup

### 1. Install Git

- Windows: 

	[Git for Windows/x64 Setup](https://git-scm.com/install/windows)

- Ubuntu: 

	```
	sudo apt install git
	```

Check Version

```
git -v
```

---

### 2. Install nvm

- Windows: 

	[nvm-setup.exe](https://github.com/coreybutler/nvm-windows/releases)

- Ubuntu: 

	[nvm version](https://github.com/nvm-sh/nvm/releases)

	```
	sudo apt install curl
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/<version>/install.sh | bash
	source ~/.bashrc
	```

Check Version

```
nvm -v
```

---

### 3. Install Node.js & npm

```
nvm install <version>
nvm use <version>
```

Check Version

```
node -v
npm -v
```

---

### 3. Install Dependencies & Run

```
npm install
npm run dev
```

---

