'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-14 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1117';
    this._commitGIT = '798dee5cde06eb368c1124212ecf2787b6c82b26';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}