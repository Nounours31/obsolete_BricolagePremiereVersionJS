'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-04 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1813';
    this._commitGIT = '42863c9433a460bbb810ec4cb5e4df18af30f16c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}