'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-18 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1255';
    this._commitGIT = '7c26a41362096fc45a0fd51344e1850124cfe882';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}