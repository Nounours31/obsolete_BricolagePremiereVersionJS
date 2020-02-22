'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-22 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1033';
    this._commitGIT = '39c699c2fe81392c7e4a031a4992e76764b6cc9a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}