{ pkgs }: {
    deps = [
      pkgs.nodejs-16_x
      pkgs.wget
      pkgs.vim
      pkgs.nodePackages.vscode-langservers-extracted
      pkgs.nodePackages.typescript-language-server
    ];
  }