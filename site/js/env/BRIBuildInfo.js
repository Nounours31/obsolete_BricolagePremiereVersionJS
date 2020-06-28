'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-28 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1541';
    this._commitGIT = '15cf4fbb510cd48c1f1fdb40dd9c05b8a36b166f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}