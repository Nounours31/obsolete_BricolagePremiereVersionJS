'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-14 08:00:04';
    this._versionBuild = 'jenkins-Bricolage-387';
    this._commitGIT = '723315b6ac0a3823cd491ebcec11d204aaa54ebd';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}