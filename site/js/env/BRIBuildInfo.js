'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-14 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-632';
    this._commitGIT = '528fd47fb7761587a0766d930ca8f03c28aab55c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}