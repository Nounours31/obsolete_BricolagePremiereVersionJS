'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-07 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1457';
    this._commitGIT = 'eb1bd66b9d31a6b4ee89d7e8e7d5dbf9fffb18ad';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}