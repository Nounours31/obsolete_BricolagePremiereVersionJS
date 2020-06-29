'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-29 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1544';
    this._commitGIT = '26e04271cc673f3b964ca721d32038ef31b50dbd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}