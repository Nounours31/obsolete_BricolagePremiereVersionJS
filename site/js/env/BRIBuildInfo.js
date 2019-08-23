'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-23 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-302';
    this._commitGIT = 'a50315901edda2734574c1ae11c1f244e2094e78';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}