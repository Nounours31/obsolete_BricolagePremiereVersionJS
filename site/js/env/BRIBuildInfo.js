'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-16 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1493';
    this._commitGIT = '989176301361416e4564c5f57f23a620871e248b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}