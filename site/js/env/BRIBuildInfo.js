'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-04 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-2176';
    this._commitGIT = '43f9bb97efa59b8167373b7e11ac34df33979c7e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}