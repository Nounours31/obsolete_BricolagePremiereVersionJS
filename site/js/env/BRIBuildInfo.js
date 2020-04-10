'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-10 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1223';
    this._commitGIT = '313156c61dc3dd32fd5946be468dfa91980fde57';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}