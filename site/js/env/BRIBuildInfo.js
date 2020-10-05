'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-05 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1937';
    this._commitGIT = 'a541be7df4e39912eae7aaf4de0bc70639bd0f65';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}