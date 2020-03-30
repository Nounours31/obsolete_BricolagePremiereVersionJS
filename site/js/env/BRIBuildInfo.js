'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-30 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1181';
    this._commitGIT = '38d03197c7f69bd1346169f566c02552f9a8427c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}