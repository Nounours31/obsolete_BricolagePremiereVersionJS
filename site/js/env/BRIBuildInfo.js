'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-05 20:00:04';
    this._versionBuild = 'jenkins-Bricolage-474';
    this._commitGIT = '5b6e37577bf007675ffb68e626ffe83e2b172d85';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}