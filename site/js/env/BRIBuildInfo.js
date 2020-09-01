'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-01 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1800';
    this._commitGIT = '846f898262a4f03d8a647b960c0e102103325661';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}