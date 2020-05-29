'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-29 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1420';
    this._commitGIT = '04ec7894ed73ed9321cca68f67dba3d38d66c910';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}