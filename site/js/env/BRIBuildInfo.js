'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-27 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-803';
    this._commitGIT = '78ab6665e6906f4babf4a00fa58f3abaf24df39d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}