'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-13 08:00:11';
    this._versionBuild = 'jenkins-Bricolage-259';
    this._commitGIT = '2d0077ebbe9b497f439de57d9d08b1f0bddc91a2';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}